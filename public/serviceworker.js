const CACHE = 'cache-v1';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE).then((cache) => cache.addAll(['./icons/', './static/'])));
});

self.addEventListener('activate', (event) => {
    console.log('Активирован');
});

self.addEventListener('fetch', (event) => {
    event.respondWith(fromCache(event.request));
    event.waitUntil(update(event.request));
});

function fromCache(request) {
    return caches.open(CACHE).then((cache) =>
        cache.match(request).then((matching) =>
            matching || Promise.reject('no-match')
        ));
}

function update(request) {
    return caches.open(CACHE).then((cache) =>
        fetch(request).then((response) =>
            cache.put(request, response)
        )
    );
}