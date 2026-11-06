const CACHE = "layover-1.1.0";
const SHELL = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL.map(u => new Request(u, {cache: "reload"}))))); self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
// Network-first, bypassing the browser's HTTP cache so updates show up immediately.
// Falls back to the cached copy only when offline. API calls are never touched.
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin) return;
  // a unique query string makes GitHub Pages' CDN fetch a fresh copy instead of a cached one
  const fresh = new URL(e.request.url); fresh.searchParams.set("_sw", Date.now());
  e.respondWith(fetch(fresh, {cache: "no-store"})
    .then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); return r; })
    .catch(() => caches.match(e.request)));
});
