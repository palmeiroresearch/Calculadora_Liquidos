// Service Worker para Calculadora Dengue
const CACHE_VERSION = 'v1.0.0';
const CACHE_NAME = `dengue-liquidos-${CACHE_VERSION}`;

// Archivos para cachear
const FILES_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Instalar y cachear
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
      .catch(err => console.log('Error al cachear archivos:', err))
  );
});

// Activar y limpiar cachés antiguas
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Estrategia de fetch: Cache-first para archivos estáticos
self.addEventListener('fetch', event => {
  // Solo cachear peticiones GET
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si está en caché, devolverlo
        if (response) {
          return response;
        }
        
        // Si no, intentar fetch de red
        return fetch(event.request)
          .then(response => {
            // No cachear respuestas inválidas
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clonar respuesta para cachear
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, responseToCache));

            return response;
          });
      })
      .catch(() => {
        // Si falla todo, devolver página de error básica
        return caches.match('./index.html');
      })
  );
});
