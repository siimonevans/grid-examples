// Polyfill for Chrome caching
importScripts('cache-polyfill.js');

// Install the ServiceWorker
self.addEventListener('install', function(event) {
  event.waitUntil(

    // Open a cache
    caches.open('grids2').then(function(cache) {

      // Define what we want to cache
      return cache.addAll([
        '/',
        'index.html',
        'app.js',
        'cache-polyfill.js',
        'manifest.json',
        'css/base.css',
        'css/fluid.css',
        'css/responsive.css',
        'css/explicit.css',
        'css/overlap.css',
        'img/bear.jpg',
        'img/bear2.jpg'
      ]);
    })
  );
});

// Use ServiceWorker (or not) to fetch data
self.addEventListener('fetch', function(event) {

  event.respondWith(

    // Look for something in the cache that matches the request
    caches.match(event.request).then(function(response) {

      // If we find something, return it
      // Otherwise, use the network instead
      return response || fetch(event.request);
    })
  );
});