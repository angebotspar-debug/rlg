// ===== SERVICE WORKER - PWA SUPPORT =====

const CACHE_NAME = 'islam-rehberi-v1.0.0';
const STATIC_CACHE = 'static-v1.0.0';
const DYNAMIC_CACHE = 'dynamic-v1.0.0';

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/index.html',
  '/tr/',
  '/tr/index.html',
  '/en/',
  '/en/index.html', 
  '/de/',
  '/de/index.html',
  '/css/styles.css',
  '/css/animations.css',
  '/js/main.js',
  '/js/template-engine.js',
  '/data/content.json',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
];

// Pages to cache dynamically
const DYNAMIC_FILES = [
  '/tr/islam-nedir.html',
  '/tr/namaz-rehberi.html',
  '/tr/iman-esaslari.html',
  '/tr/gunluk-hayat.html',
  '/tr/30-gunluk-plan.html',
  '/tr/sss.html',
  '/tr/kaynaklar.html',
  '/en/what-is-islam.html',
  '/en/prayer-guide.html',
  '/en/pillars-of-faith.html',
  '/en/daily-life.html',
  '/en/30-day-plan.html',
  '/en/faq.html',
  '/en/resources.html',
  '/de/was-ist-islam.html',
  '/de/gebetsanleitung.html',
  '/de/glaubenssaeulen.html',
  '/de/taegliches-leben.html',
  '/de/30-tage-plan.html',
  '/de/faq.html',
  '/de/ressourcen.html'
];

// Install Event - Cache static files
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching static files');
        return cache.addAll(STATIC_FILES);
      })
      .then(() => {
        console.log('Service Worker: Static files cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Error caching static files:', error);
      })
  );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated successfully');
        return self.clients.claim();
      })
  );
});

// Fetch Event - Serve cached files or fetch from network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip external requests (except fonts)
  if (url.origin !== location.origin && !url.hostname.includes('fonts.googleapis.com')) {
    return;
  }
  
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        // Return cached version if available
        if (cachedResponse) {
          console.log('Service Worker: Serving from cache:', request.url);
          return cachedResponse;
        }
        
        // Fetch from network and cache dynamically
        return fetch(request)
          .then((networkResponse) => {
            // Don't cache if not successful
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }
            
            // Clone the response
            const responseToCache = networkResponse.clone();
            
            // Cache dynamic content
            if (shouldCacheDynamically(request.url)) {
              caches.open(DYNAMIC_CACHE)
                .then((cache) => {
                  console.log('Service Worker: Caching dynamically:', request.url);
                  cache.put(request, responseToCache);
                });
            }
            
            return networkResponse;
          })
          .catch((error) => {
            console.log('Service Worker: Fetch failed, serving offline page:', error);
            
            // Serve offline page for HTML requests
            if (request.headers.get('accept').includes('text/html')) {
              return caches.match('/offline.html') || createOfflinePage();
            }
            
            // For other resources, return a basic response
            return new Response('Offline', {
              status: 503,
              statusText: 'Service Unavailable'
            });
          });
      })
  );
});

// Helper function to determine if a file should be cached dynamically
function shouldCacheDynamically(url) {
  // Cache HTML pages, CSS, JS, and JSON files
  return url.includes('.html') || 
         url.includes('.css') || 
         url.includes('.js') || 
         url.includes('.json') ||
         DYNAMIC_FILES.some(file => url.includes(file));
}

// Create a basic offline page
function createOfflinePage() {
  const offlineHTML = `
    <!DOCTYPE html>
    <html lang="tr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Çevrimdışı - İslam Rehberi</title>
        <style>
            body {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                margin: 0;
                padding: 0;
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(135deg, #fefefe 0%, white 50%, rgba(245, 245, 220, 0.2) 100%);
                color: #171717;
            }
            .offline-container {
                text-align: center;
                max-width: 500px;
                padding: 2rem;
            }
            .offline-icon {
                width: 80px;
                height: 80px;
                margin: 0 auto 2rem;
                background: linear-gradient(135deg, #2d6a4f, #059669);
                border-radius: 2rem;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 2rem;
                font-weight: bold;
            }
            .offline-title {
                font-size: 2rem;
                font-weight: 700;
                margin-bottom: 1rem;
                color: #171717;
            }
            .offline-message {
                font-size: 1.125rem;
                color: #525252;
                line-height: 1.6;
                margin-bottom: 2rem;
            }
            .offline-button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 1rem 2rem;
                background: linear-gradient(135deg, #2d6a4f, #059669);
                color: white;
                text-decoration: none;
                border-radius: 1rem;
                font-weight: 600;
                transition: transform 0.2s ease;
            }
            .offline-button:hover {
                transform: translateY(-2px);
            }
        </style>
    </head>
    <body>
        <div class="offline-container">
            <div class="offline-icon">IG</div>
            <h1 class="offline-title">Çevrimdışısınız</h1>
            <p class="offline-message">
                İnternet bağlantınız yok gibi görünüyor. Lütfen bağlantınızı kontrol edin ve tekrar deneyin.
            </p>
            <a href="/" class="offline-button" onclick="window.location.reload()">
                Tekrar Dene
            </a>
        </div>
    </body>
    </html>
  `;
  
  return new Response(offlineHTML, {
    headers: { 'Content-Type': 'text/html' }
  });
}

// Background Sync - For future features
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Background sync triggered:', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Perform background sync tasks
      doBackgroundSync()
    );
  }
});

// Push Notifications - For future features
self.addEventListener('push', (event) => {
  console.log('Service Worker: Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'Yeni içerik mevcut!',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'İncele',
        icon: '/icons/checkmark.png'
      },
      {
        action: 'close',
        title: 'Kapat',
        icon: '/icons/xmark.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('İslam Rehberi', options)
  );
});

// Notification Click Handler
self.addEventListener('notificationclick', (event) => {
  console.log('Service Worker: Notification clicked:', event.action);
  
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Helper function for background sync
async function doBackgroundSync() {
  try {
    // Sync offline actions, update cache, etc.
    console.log('Service Worker: Performing background sync');
    
    // Example: Sync user preferences, update content cache
    await updateContentCache();
    
    return Promise.resolve();
  } catch (error) {
    console.error('Service Worker: Background sync failed:', error);
    return Promise.reject(error);
  }
}

// Update content cache
async function updateContentCache() {
  try {
    const cache = await caches.open(DYNAMIC_CACHE);
    
    // Update content.json
    const contentResponse = await fetch('/data/content.json');
    if (contentResponse.ok) {
      await cache.put('/data/content.json', contentResponse);
      console.log('Service Worker: Content cache updated');
    }
    
    return Promise.resolve();
  } catch (error) {
    console.error('Service Worker: Failed to update content cache:', error);
    return Promise.reject(error);
  }
}

// Message Handler - Communication with main thread
self.addEventListener('message', (event) => {
  console.log('Service Worker: Message received:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => caches.delete(cacheName))
        );
      })
    );
  }
});

// Error Handler
self.addEventListener('error', (event) => {
  console.error('Service Worker: Error occurred:', event.error);
});

// Unhandled Rejection Handler
self.addEventListener('unhandledrejection', (event) => {
  console.error('Service Worker: Unhandled promise rejection:', event.reason);
  event.preventDefault();
});

console.log('Service Worker: Script loaded successfully');
