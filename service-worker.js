// service-worker.js
const CACHE_NAME = 'tehillim-app-cache-v3'; // שיניתי ל-v3 כדי לוודא עדכון קאש
const urlsToCache = [
    '/',
    'main.html', // <--- שונה ל-main.html
    'tehillim-data.js',
    'manifest.json',
    'icons/icon-192x192.png', // אם יצרת את האייקונים
    'icons/icon-512x512.png', // אם יצרת את האייקונים
    'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
    // הוסף כאן נתיבים לכל קבצי ה-CSS, JS, תמונות וכו' שהאפליקציה שלך צריכה
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Service Worker: Cache opened, adding URLs.');
                return cache.addAll(urlsToCache);
            })
            .catch(error => {
                console.error('Service Worker: Cache.addAll failed:', error);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                // If not in cache, fetch from network
                return fetch(event.request);
            })
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        console.log('Service Worker: Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    console.log('Service Worker: Activated!');
    self.clients.claim(); // Ensures the service worker controls the current client right away
});