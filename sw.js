// 讓 Service Worker 立即接管頁面
self.addEventListener('install', (event) => self.skipWaiting());
self.addEventListener('activate', (event) => self.clients.claim());