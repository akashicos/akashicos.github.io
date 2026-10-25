// Sustituye al service worker de la app antigua: borra la copia guardada para
// usarla sin conexión, se da de baja y recarga las pestañas abiertas, que
// pasan a ver el aviso de mudanza (index.html).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    await Promise.all((await caches.keys()).map(k => caches.delete(k)));
    await self.registration.unregister();
    const ventanas = await self.clients.matchAll({ type: 'window' });
    ventanas.forEach(v => v.navigate(v.url));
  })());
});