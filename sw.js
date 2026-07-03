// sw.js — Lunes de UNO. Recibe Web Push y abre el deep-link al tocar.
// NO cachea nada: cero impacto en el comportamiento de la app.
const SW_VERSION = 'v2';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener('push', (event) => {
  let data = {};
  try { data = event.data ? event.data.json() : {}; } catch (e) {}
  event.waitUntil(self.registration.showNotification(data.title || 'Lunes de UNO', {
    body: data.body || '',
    // icon: libro a color (paleta de la app). badge: silueta blanca sobre
    // transparente — Android solo usa el canal alfa; un PNG opaco = cuadrado.
    icon: 'assets/push-icon-192.png',
    badge: 'assets/push-badge-96.png',
    tag: data.nid || 'lunesdeuno',           // colapsa reintentos del mismo id
    data: { url: data.url || './', nid: data.nid || '' },
  }));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const d = event.notification.data || {};
  let url;
  try { url = new URL(d.url || './', self.location.href); }
  catch (e) { url = new URL('./', self.location.href); }
  if (d.nid) {                               // engage.js loguea el click al abrir
    url.searchParams.set('nid', d.nid);
    url.searchParams.set('src', 'push');
  }
  event.waitUntil(clients.openWindow(url.href));
});
