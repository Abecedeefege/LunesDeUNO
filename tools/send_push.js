#!/usr/bin/env node
// Dispatcher de Web Push de Lunes de UNO.
// Lee notifications/queue.json (repo), manda lo vencido a TODAS las
// suscripciones activas guardadas en Firestore (colección pushSubs) y
// actualiza estados + send_log.json. Es deliberadamente tonto: NO decide
// contenido — eso es del agente /engagement.
//
// Ownership: este script escribe estados de la queue + send_log (repo) y el
// status de suscripciones muertas (Firestore). Nada más.
const fs = require('fs');
const path = require('path');
const webpush = require('web-push');

const ROOT = path.join(__dirname, '..');
const QUEUE_PATH    = path.join(ROOT, 'notifications/queue.json');
const SEND_LOG_PATH = path.join(ROOT, 'notifications/send_log.json');
const VAPID_PUB     = path.join(ROOT, 'notifications/vapid_public.txt');
// VAPID subject: URL del sitio (válido según spec; evita poner un email en el repo)
const VAPID_SUBJECT = 'https://abecedeefege.github.io/LunesDeUNO/';

const FS_BASE = 'https://firestore.googleapis.com/v1/projects/lunesdeuno/databases/(default)/documents';
const FS_KEY  = 'AIzaSyDgmh5HjjYdIwkFgeo7iBfcfQ_b73Xa3yM';

const readJson  = (p, fb) => { try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return fb; } };
const writeJson = (p, d)  => fs.writeFileSync(p, JSON.stringify(d, null, 2) + '\n');
const sval = (f) => (f && f.stringValue) || null;

// Tope de socios del club: 8 dispositivos activos (los jugadores de la mesa).
// El orden por updated_at asc hace el corte determinístico si alguien se pasa.
const MAX_ACTIVE_SUBS = 8;

async function loadActiveSubs() {
  const r = await fetch(`${FS_BASE}/pushSubs?key=${FS_KEY}&pageSize=100`);
  if (!r.ok) throw new Error(`Firestore pushSubs HTTP ${r.status}`);
  const data = await r.json();
  return (data.documents || [])
    .map((doc) => {
      const f = doc.fields || {};
      return {
        id: doc.name.split('/').pop(),
        device: sval(f.device) || 'sin-nombre',
        status: sval(f.status),
        updated_at: sval(f.updated_at) || '',
        subscription: {
          endpoint: sval(f.endpoint),
          keys: { p256dh: sval(f.p256dh), auth: sval(f.auth) },
        },
      };
    })
    .filter((s) => s.status === 'active' && s.subscription.endpoint &&
                   s.subscription.keys.p256dh && s.subscription.keys.auth)
    .sort((a, b) => a.updated_at.localeCompare(b.updated_at))
    .slice(0, MAX_ACTIVE_SUBS);
}

async function invalidateSub(sub, reason) {
  const url = `${FS_BASE}/pushSubs/${encodeURIComponent(sub.id)}?key=${FS_KEY}` +
    '&updateMask.fieldPaths=status&updateMask.fieldPaths=invalidated_at&updateMask.fieldPaths=invalid_reason';
  const body = { fields: {
    status: { stringValue: 'invalid' },
    invalidated_at: { stringValue: new Date().toISOString() },
    invalid_reason: { stringValue: reason },
  } };
  const r = await fetch(url, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!r.ok) console.error(`  no pude invalidar ${sub.id}: HTTP ${r.status}`);
}

async function main() {
  const queue = readJson(QUEUE_PATH, null);
  if (!queue || !Array.isArray(queue.notifications)) { console.log('Cola vacía.'); return; }

  const now = Date.now();
  let changed = false;

  // Expirar vencidos aunque no haya suscripción (evita backlog a deshora).
  for (const n of queue.notifications) {
    if (n.status === 'pending' && n.expires_at && Date.parse(n.expires_at) < now) {
      n.status = 'expired'; changed = true;
      console.log(`[${n.id}] expirada sin enviar`);
    }
  }

  const due = queue.notifications.filter(
    (n) => n.status === 'pending' && n.send_at && Date.parse(n.send_at) <= now
  );

  if (!due.length) {
    if (changed) { queue._updated_at = new Date().toISOString(); writeJson(QUEUE_PATH, queue); }
    console.log('Nada vencido para enviar.');
    return;
  }

  let subs = [];
  try { subs = await loadActiveSubs(); }
  catch (e) { console.error('Error leyendo suscripciones:', e.message); process.exitCode = 1; return; }

  if (!subs.length) {
    console.log(`${due.length} vencidas pero sin suscripción activa — quedan pending.`);
    if (changed) { queue._updated_at = new Date().toISOString(); writeJson(QUEUE_PATH, queue); }
    return;
  }

  const priv = process.env.VAPID_PRIVATE_KEY;
  if (!priv) { console.error('Falta VAPID_PRIVATE_KEY'); process.exitCode = 1; return; }
  webpush.setVapidDetails(VAPID_SUBJECT, fs.readFileSync(VAPID_PUB, 'utf8').trim(), priv);

  const log = readJson(SEND_LOG_PATH, { events: [] });
  for (const n of due) {
    const payload = JSON.stringify({ nid: n.id, title: n.title, body: n.body, url: n.url });
    let okCount = 0, lastFail = null;
    for (const sub of subs) {
      if (sub.status !== 'active') continue;   // invalidada en esta misma corrida
      try {
        // urgency high + TTL 4h: entrega inmediata saltando Doze; si el
        // teléfono está apagado llega al prender, pero no trasnochada mañana.
        const res = await webpush.sendNotification(sub.subscription, payload, { TTL: 14400, urgency: 'high' });
        okCount++;
        log.events.push({ type: 'sent', nid: n.id, device: sub.device, ts: new Date().toISOString(), status_code: res.statusCode });
        console.log(`[${n.id}] → ${sub.device}: aceptada (HTTP ${res.statusCode})`);
      } catch (err) {
        const code = err.statusCode || 0;
        lastFail = `HTTP ${code}`;
        log.events.push({ type: 'failed', nid: n.id, device: sub.device, ts: new Date().toISOString(), status_code: code });
        console.error(`[${n.id}] → ${sub.device}: falló (HTTP ${code})`);
        if (code === 404 || code === 410) {     // endpoint muerto → invalidar SOLO esa sub
          sub.status = 'invalid';
          await invalidateSub(sub, `subscription_gone (${code})`);
        }
      }
    }
    // Anti-duplicados: el tag del SW colapsa reenvíos del mismo id si el job
    // muere entre el envío y este write.
    if (okCount > 0) { n.status = 'sent'; n.sent_at = new Date().toISOString(); }
    else { n.status = 'failed'; n.fail_reason = lastFail || 'sin suscripciones activas'; }
    changed = true;
  }
  writeJson(SEND_LOG_PATH, log);

  if (changed) { queue._updated_at = new Date().toISOString(); writeJson(QUEUE_PATH, queue); }
}
main().catch((e) => { console.error(e); process.exitCode = 1; });
