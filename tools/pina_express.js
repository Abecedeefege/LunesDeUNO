#!/usr/bin/env node
// Entrega EXPRESS de Piñas Directas (regla de Andrés, 17/07 por chat):
// el que solicita su piña en el Gimnasio la recibe ~5 min después, sin
// esperar a la corrida diaria del agente. Corre cada 5 min por Actions
// (.github/workflows/pina-express.yml): lee los eventos pina_request de
// Firestore, encola el push personal y el paso siguiente del workflow lo
// despacha con send_push.js en la misma corrida.
//
// HORNO DE 5 MINUTOS (pedido explícito de Andrés): la entrega NUNCA es
// inmediata — una solicitud recién se encola cuando tiene ≥5 min de
// antigüedad, para que se note que el laboratorio "trabaja" la piña.
// Con el cron de 5 min, en la práctica llega entre el minuto 5 y el 10.
//
// Ownership: este script agrega items a notifications/queue.json y lleva
// el ledger notifications/pina_deliveries.json (una piña por jugador).
// El envío y los estados siguen siendo de send_push.js.
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const QUEUE_PATH  = path.join(ROOT, 'notifications/queue.json');
const LEDGER_PATH = path.join(ROOT, 'notifications/pina_deliveries.json');

const FS_BASE = 'https://firestore.googleapis.com/v1/projects/lunesdeuno/databases/(default)/documents';
const FS_KEY  = 'AIzaSyDgmh5HjjYdIwkFgeo7iBfcfQ_b73Xa3yM';

// 'andres' es Mata (misma persona): su solicitud entrega la piña de mata
// a todos sus devices activos.
const ALIASES = { andres: 'mata' };

// Vault de la Serie 2026: página secreta + copy del push por jugador.
const VAULT = {
  pt:      { file: 'pina-pt-fd4cb05e.html',      copy: 'EL PADRE SILENCIOSO: el mejor promedio de puesto de TODA la mesa (3,50 en 14 fechas). El póster es tuyo — abrilo.' },
  mac:     { file: 'pina-mac-19ac3eb2.html',     copy: 'EL GIGANTE DE LAS NOCHES GRANDES: podio (3º de 11) en la mesa más multitudinaria del año. El póster es tuyo — abrilo.' },
  mata:    { file: 'pina-mata-32b16d4d.html',    copy: 'EL INTOCABLE: 6-0 sobre Negro, prontuario en blanco en 10 fechas. El póster es tuyo — abrilo.' },
  gael:    { file: 'pina-gael-239245bf.html',    copy: 'LA MASACRE DEL 28 DE ABRIL: ganaste por 98 puntos, top-3 de palizas del año. El póster es tuyo — abrilo.' },
  nachi:   { file: 'pina-nachi-eb23fea7.html',   copy: 'EL ABUELO: padre de Carucha 6-2… que es padre de Cobra. Abuelo del campeón. El póster es tuyo — abrilo.' },
  carucha: { file: 'pina-carucha-a0bdc735.html', copy: 'EL PADRE DE FAMILIA: 5 hijos reconocidos por la ciencia en 2026. El póster es tuyo — abrilo.' },
  gordo:   { file: 'pina-gordo-5cec1f1c.html',   copy: 'EL ROMPE RÉCORDS: 127, el mejor puntaje del año — nadie había bajado de 132. El póster es tuyo — abrilo.' },
  cobra:   { file: 'pina-cobra-307c49eb.html',   copy: 'EL COLECCIONISTA DE CORONAS: 5 títulos en 2026, nadie tiene más. El póster es tuyo — abrilo.' },
  naso:    { file: 'pina-naso-e6513433.html',    copy: 'EL PARRICIDIO DEL 5 DE MAYO: campeón en la casa de Carucha, venciendo al propio Carucha. El póster es tuyo — abrilo.' },
  negro:   { file: 'pina-negro-e5f44ee5.html',   copy: 'EL RÉCORD DE LOS 120 DÍAS: tu 132 fue el mejor puntaje del año durante 120 días. El póster es tuyo — abrilo.' },
  tano:    { file: 'pina-tano-9a332eeb.html',    copy: 'EL FRANCOTIRADOR: 133, a SEIS puntos del récord histórico del año. El póster es tuyo — abrilo.' },
};

const SITE = 'https://abecedeefege.github.io/LunesDeUNO/engage/';

const readJson  = (p, fb) => { try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return fb; } };
const writeJson = (p, d)  => fs.writeFileSync(p, JSON.stringify(d, null, 2) + '\n');
const sval = (f) => (f && f.stringValue) || null;

// ISO con offset -03:00 explícito (hora Montevideo, sin DST).
function isoUY(ms) {
  const d = new Date(ms - 3 * 3600 * 1000);
  return d.toISOString().replace(/\.\d{3}Z$/, '') + '-03:00';
}

async function fetchPinaRequests() {
  const r = await fetch(`${FS_BASE}:runQuery?key=${FS_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ structuredQuery: {
      from: [{ collectionId: 'engagement' }],
      where: { fieldFilter: { field: { fieldPath: 'type' }, op: 'EQUAL', value: { stringValue: 'pina_request' } } },
    } }),
  });
  if (!r.ok) throw new Error(`Firestore engagement HTTP ${r.status}`);
  const rows = await r.json();
  return (rows || [])
    .filter((x) => x.document && x.document.fields)
    .map((x) => ({
      device: (sval(x.document.fields.device) || '').toLowerCase(),
      ts: sval(x.document.fields.ts) || '',
    }));
}

async function fetchActiveDevicesByPlayer() {
  const r = await fetch(`${FS_BASE}/pushSubs?key=${FS_KEY}&pageSize=100`);
  if (!r.ok) throw new Error(`Firestore pushSubs HTTP ${r.status}`);
  const data = await r.json();
  const byPlayer = {};
  for (const doc of data.documents || []) {
    const f = doc.fields || {};
    if (sval(f.status) !== 'active') continue;
    const device = (sval(f.device) || '').toLowerCase();
    const who = ALIASES[device] || device;
    if (!VAULT[who]) continue;
    (byPlayer[who] = byPlayer[who] || []).push(device);
  }
  for (const k of Object.keys(byPlayer)) byPlayer[k] = [...new Set(byPlayer[k])];
  return byPlayer;
}

async function main() {
  const ledger = readJson(LEDGER_PATH, { deliveries: {} });
  const queue = readJson(QUEUE_PATH, null);
  if (!queue || !Array.isArray(queue.notifications)) throw new Error('queue.json ilegible');

  const HORNO_MS = 5 * 60 * 1000;
  const requests = await fetchPinaRequests();
  const pendientes = {};
  for (const req of requests) {
    const who = ALIASES[req.device] || req.device;
    if (!VAULT[who]) continue;                       // apodo que no es de la mesa
    if (ledger.deliveries[who]) continue;            // ya entregada: una por jugador
    if (queue.notifications.some((n) => n.url && n.url.includes(VAULT[who].file))) continue;
    const age = Date.now() - (Date.parse(req.ts) || 0);
    if (age < HORNO_MS) {                            // horno: mínimo 5 min de espera
      console.log(`[${who}] en el horno (${Math.round(age / 60000)} min) — sale en la próxima pasada.`);
      continue;
    }
    if (!pendientes[who] || req.ts < pendientes[who]) pendientes[who] = req.ts;
  }

  const players = Object.keys(pendientes);
  if (!players.length) { console.log('Sin solicitudes nuevas.'); return; }

  const byPlayer = await fetchActiveDevicesByPlayer();
  const now = Date.now();
  let queued = 0;

  for (const who of players) {
    const devices = byPlayer[who];
    if (!devices || !devices.length) {
      // Sin push activa no hay entrega; el evento queda y se reintenta cada 5 min.
      console.log(`[${who}] solicitó pero no tiene push activa — se reintenta cuando active.`);
      continue;
    }
    const nid = `${isoUY(now).slice(0, 10)}-pina-${who}-express`;
    queue.notifications.unshift({
      id: nid,
      title: '🥊 Tu Piña Directa está forjada',
      body: VAULT[who].copy,
      url: SITE + VAULT[who].file,
      devices,
      send_at: isoUY(now),
      expires_at: isoUY(now + 6 * 3600 * 1000),
      status: 'pending',
      sent_at: null,
      fail_reason: null,
      created_by: 'pina-express (entrega automática ~5 min tras la solicitud en el Gimnasio; regla de Andrés 17/07, sin preview)',
    });
    ledger.deliveries[who] = { nid, requested_at: pendientes[who], queued_at: new Date().toISOString() };
    queued++;
    console.log(`[${who}] piña encolada → ${devices.join(', ')} (${nid})`);
  }

  if (queued) {
    queue._updated_at = new Date().toISOString();
    writeJson(QUEUE_PATH, queue);
    writeJson(LEDGER_PATH, ledger);
  }
  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `queued=${queued ? 'true' : 'false'}\n`);
  }
}
main().catch((e) => { console.error(e); process.exitCode = 1; });
