// Vanilla service worker (no workbox)
const CACHE_NAME = 'cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/index.js',
  'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js',
  '/images/icon.png',
];

// The three phases of the service worker's life cycle are:
// 1. install
// 2. activate
// 3. claim

// Install - the service worker is first installed and then activated.
// https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle
self.addEventListener('install', (e) =>
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  )
);

// Activate - the service worker is activated after install.
// Clean Up / activate - Clear the CACHE of all items not matching in CACHE_NAME (old CACHE)
self.addEventListener('activate', (e) =>
  e.waitUntil(
    caches.keys().then((keyList) =>//'cache-v1'
      Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  )
);

// Claim - the service worker is claimed after install.
// When a service worker is initially registered, pages won't use it until the next load.
// The clients.claim() method is used to claim the service worker immediately.
self.addEventListener('activate', (e) => {
  // Tells our new service worker to take over.
  e.waitUntil(clients.claim());
});

// Example of a simple cache-first network-first strategy
// The service worker is checking the cache for a response and if it doesn't find it, it fetches it.
self.addEventListener('fetch', (e) =>
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)))
);
