const CACHE='gatooscuro-cache-v1';
const ASSETS=['./','./index.html','./about.html','./assets/style.css','./assets/main.js','./feed.xml'];
self.addEventListener('install',e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
});
self.addEventListener('fetch',e=>{
  e.respondWith(
    caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{
      caches.open(CACHE).then(c=>c.put(e.request,res.clone()));
      return res;
    })).catch(()=>caches.match('./index.html'))
  );
});
