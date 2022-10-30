const cacheName = 'mrepol742-t';

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(cacheName));
});

self.addEventListener('fetch', async (event) => {
    event.respondWith(caches.open(cacheName).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request.url).then((fetchedResponse) => {
          cache.put(event.request, fetchedResponse.clone());
          return fetchedResponse;
        });
      });
    }));
});