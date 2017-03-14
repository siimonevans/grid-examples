// Polyfill for Chrome caching
importScripts('cache-polyfill.js');

// Install the ServiceWorker
self.addEventListener('install', function(event) {
  event.waitUntil(

    // Open a cache
    caches.open('grids').then(function(cache) {

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
        'css/masonry-1.css',
        'css/masonry-2.css'
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