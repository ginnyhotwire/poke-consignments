
const CACHE="commission-app-v7"

const files=[
"./",
"index.html",
"manifest.json",
"ICON.png"
]

self.addEventListener("install",e=>{
e.waitUntil(
caches.open(CACHE).then(cache=>cache.addAll(files))
)
})

/* Delete old caches function */
self.addEventListener("activate",event=>{
event.waitUntil(
caches.keys().then(keys=>{
return Promise.all(
keys.map(key=>{
if(key!==CACHE){
return caches.delete(key)
}
})
)
})
)
})

self.addEventListener("fetch",e=>{
e.respondWith(
caches.match(e.request).then(r=>r||fetch(e.request))
)
})
