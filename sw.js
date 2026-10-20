const CACHE_NAME = 'vacuum-wound-v1';
const urlsToCache = [
  './index.html',
  './Vac.png',
  './manifest.json'
];

// تثبيت التخزين المؤقت
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// جلب الملفات أوفلاين
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

