// engage.js — tracking de feedback de las experiencias de Lunes de UNO.
//
// Patrón outbox: cada evento se guarda SINCRÓNICO en localStorage ANTES de
// intentar mandarlo (en mobile, un fetch disparado al minimizar no completa).
// Flush reintentable al cargar / volver a foco / recuperar red, con dedup por
// id: cada evento es un doc de la colección Firestore `engagement` cuyo docId
// es el id del evento (PATCH = upsert idempotente, reintentar nunca duplica).
//
// Badge de sync honesto: muestra el estado REAL (pendientes / error / ok).
(function () {
  'use strict';

  var FS_BASE = 'https://firestore.googleapis.com/v1/projects/lunesdeuno/databases/(default)/documents';
  var FS_KEY = 'AIzaSyDgmh5HjjYdIwkFgeo7iBfcfQ_b73Xa3yM';
  var COLLECTION = 'engagement';

  var LS_OUTBOX = 'lunesdeuno_engage_outbox';
  var LS_SEEN_NIDS = 'lunesdeuno_engage_seen_nids';
  var LS_LASTVISIT = 'lunesdeuno_engage_lastvisit_'; // + slug
  var LS_DEVICE_ID = 'lunesdeuno_device_id';
  var LS_DEVICE_NAME = 'lunesdeuno_device_name';

  var PAGE = (location.pathname.split('/').pop() || 'index').replace(/\.html?$/, '');
  var LOAD_ID = Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  var loadedAt = Date.now();
  var maxScroll = 0;
  var flushing = false;

  // ---------- helpers ----------
  function lsGet(k, fb) {
    try { var v = localStorage.getItem(k); return v === null ? fb : JSON.parse(v); }
    catch (e) { return fb; }
  }
  function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  function deviceId() {
    var id = null;
    try { id = localStorage.getItem(LS_DEVICE_ID); } catch (e) {}
    if (!id) {
      id = (window.crypto && crypto.randomUUID) ? crypto.randomUUID()
        : 'dev-' + Date.now() + '-' + Math.random().toString(36).slice(2);
      try { localStorage.setItem(LS_DEVICE_ID, id); } catch (e) {}
    }
    return id;
  }
  function deviceName() {
    try { return localStorage.getItem(LS_DEVICE_NAME) || 'sin-nombre'; } catch (e) { return 'sin-nombre'; }
  }

  function toFields(ev) {
    var f = {};
    Object.keys(ev).forEach(function (k) {
      var v = ev[k];
      if (v === null || v === undefined) return;
      if (typeof v === 'number') f[k] = { integerValue: String(Math.round(v)) };
      else if (typeof v === 'boolean') f[k] = { booleanValue: v };
      else f[k] = { stringValue: String(v) };
    });
    return f;
  }

  // ---------- badge de sync honesto ----------
  var badge = null, badgeTimer = null;
  function ensureBadge() {
    if (badge) return badge;
    badge = document.createElement('div');
    badge.style.cssText = 'position:fixed;left:10px;bottom:10px;z-index:9999;' +
      'font:600 11px -apple-system,BlinkMacSystemFont,sans-serif;padding:5px 10px;' +
      'border-radius:999px;background:#17171f;color:#b9b9c4;border:1px solid #2a2a35;' +
      'pointer-events:none;transition:opacity .4s;opacity:0;';
    document.body.appendChild(badge);
    return badge;
  }
  function setBadge(text, color, autohide) {
    var b = ensureBadge();
    b.textContent = text;
    b.style.color = color || '#b9b9c4';
    b.style.opacity = '1';
    if (badgeTimer) clearTimeout(badgeTimer);
    if (autohide) badgeTimer = setTimeout(function () { b.style.opacity = '0'; }, 2500);
  }
  function updateBadge(state, n) {
    if (state === 'pending') setBadge('⏳ Sincronizando ' + n + '…', '#FFDE00', false);
    else if (state === 'error') setBadge('⚠️ Sin conexión — ' + n + ' guardados en el teléfono', '#ED1C24', false);
    else if (state === 'ok') setBadge('✓ Sincronizado', '#00A651', true);
  }

  // ---------- outbox ----------
  function enqueue(type, data) {
    var ev = {
      id: (data && data.id) || (type + '-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 7)),
      type: type,
      ts: new Date().toISOString(),
      page: PAGE,
      url: location.pathname + location.search,
      device: deviceName(),
      device_id: deviceId(),
    };
    Object.keys(data || {}).forEach(function (k) { if (k !== 'id') ev[k] = data[k]; });
    var box = lsGet(LS_OUTBOX, []);
    // dedup/replace por id (ej: dwell del mismo page-load se actualiza)
    box = box.filter(function (e) { return e.id !== ev.id; });
    box.push(ev);
    lsSet(LS_OUTBOX, box);   // guardado sincrónico ANTES de cualquier red
    flush();
    return ev.id;
  }

  function sendOne(ev) {
    return fetch(FS_BASE + '/' + COLLECTION + '/' + encodeURIComponent(ev.id) + '?key=' + FS_KEY, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fields: toFields(ev) }),
      keepalive: true,
    }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
    });
  }

  function flush() {
    if (flushing) return Promise.resolve();
    var box = lsGet(LS_OUTBOX, []);
    if (!box.length) return Promise.resolve();
    flushing = true;
    updateBadge('pending', box.length);
    var chain = Promise.resolve();
    box.forEach(function (ev) {
      chain = chain.then(function () {
        return sendOne(ev).then(function () {
          var cur = lsGet(LS_OUTBOX, []);
          lsSet(LS_OUTBOX, cur.filter(function (e) { return e.id !== ev.id; }));
        });
      });
    });
    return chain.then(function () {
      flushing = false;
      var left = lsGet(LS_OUTBOX, []);
      if (left.length) { updateBadge('error', left.length); }
      else { updateBadge('ok'); }
    }).catch(function () {
      flushing = false;
      updateBadge('error', lsGet(LS_OUTBOX, []).length);
    });
  }

  // ---------- eventos automáticos ----------
  function trackNotificationClick() {
    var params = new URLSearchParams(location.search);
    var nid = params.get('nid');
    if (!nid) return false;
    var seen = lsGet(LS_SEEN_NIDS, []);
    if (seen.indexOf(nid) !== -1) return true;
    seen.push(nid);
    if (seen.length > 100) seen = seen.slice(-100);
    lsSet(LS_SEEN_NIDS, seen);
    enqueue('notification_clicked', { id: 'nclick-' + nid + '-' + deviceId().slice(0, 8), nid: nid, src: params.get('src') || '' });
    return true;
  }

  function trackVisit(fromPush) {
    if (!fromPush) {
      var last = lsGet(LS_LASTVISIT + PAGE, 0);
      if (Date.now() - last < 3600 * 1000) return;   // throttle 1/hora en visitas directas
    }
    lsSet(LS_LASTVISIT + PAGE, Date.now());
    enqueue('page_visit', { from_push: !!fromPush });
  }

  function trackDwell() {
    var dwell = Math.round((Date.now() - loadedAt) / 1000);
    if (dwell < 2) return;
    // mismo id por page-load: cada hide re-upserta con valores actualizados
    enqueue('dwell', { id: 'dwell-' + LOAD_ID, dwell_s: dwell, scroll_pct: maxScroll });
  }

  function onScroll() {
    var doc = document.documentElement;
    var total = doc.scrollHeight - window.innerHeight;
    var pct = total > 0 ? Math.round((window.scrollY / total) * 100) : 100;
    if (pct > maxScroll) maxScroll = Math.min(100, pct);
  }

  // ---------- API pública para las páginas ----------
  function markButtons(el, hintText) {
    if (!el) return;
    var parent = el.parentElement;
    if (parent) {
      Array.prototype.forEach.call(parent.querySelectorAll('button'), function (b) {
        b.disabled = true; b.style.opacity = (b === el) ? '1' : '.35';
      });
      el.style.outline = '2px solid #FFDE00';
      var hint = parent.querySelector('.react-hint, .q-hint, .engage-hint');
      if (hint) hint.textContent = hintText;
    }
  }
  function honestHint(el) {
    flush().then(function () {
      var left = lsGet(LS_OUTBOX, []);
      markButtons(el, left.length ? '⏳ guardado en el teléfono, sincroniza al volver la señal' : '✓ guardado');
    });
  }

  window.engageTrack = function (type, data) { return enqueue(type, data || {}); };

  window.engageReact = function (slug, value, el) {
    enqueue('reaction', { id: 'react-' + slug + '-' + deviceId().slice(0, 8), slug: slug, reaction: value });
    markButtons(el, '…');
    honestHint(el);
  };

  window.engageAnswer = function (questionId, value, el) {
    enqueue('answer', { id: 'answer-' + questionId + '-' + deviceId().slice(0, 8), question: questionId, answer: value });
    markButtons(el, '…');
    honestHint(el);
  };

  window.engageApprove = function (proposalId, el) {
    enqueue('proposal_approved', { id: 'approve-' + proposalId + '-' + deviceId().slice(0, 8), proposal: proposalId });
    markButtons(el, '…');
    honestHint(el);
  };

  window.engageRejected = function (proposalId, el) {
    enqueue('proposal_rejected', { id: 'reject-' + proposalId + '-' + deviceId().slice(0, 8), proposal: proposalId });
    markButtons(el, '…');
    honestHint(el);
  };

  // ---------- control de fatiga (auto-inyectado al pie) ----------
  function injectFooterControls() {
    var div = document.createElement('div');
    div.style.cssText = 'margin:2.2rem 0 1rem;text-align:center;font:12px -apple-system,sans-serif;color:#6b6b78;';
    var base = location.pathname.indexOf('/engage/') !== -1 ? '../' : '';
    div.innerHTML = '<a href="' + base + 'notificaciones.html" style="color:#8f8f9c;">🔔 avisos</a>' +
      ' · <a href="#" id="_engageMute" style="color:#8f8f9c;">🔕 esto es mucho, pausen</a>';
    document.body.appendChild(div);
    document.getElementById('_engageMute').addEventListener('click', function (e) {
      e.preventDefault();
      enqueue('push_unsubscribe', { id: 'mute-' + deviceId().slice(0, 8) + '-' + Date.now().toString(36) });
      e.target.textContent = '✓ anotado — el agente baja el volumen';
      e.target.style.pointerEvents = 'none';
    });
  }

  // ---------- init ----------
  function init() {
    var fromPush = trackNotificationClick();
    trackVisit(fromPush);
    injectFooterControls();
    flush();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') trackDwell();
    else flush();   // volvió a foco → reintentar pendientes
  });
  window.addEventListener('pagehide', trackDwell);
  window.addEventListener('online', flush);

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
