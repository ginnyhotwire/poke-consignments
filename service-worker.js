
const CACHE="commission-app-v5"

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

self.addEventListener("fetch",e=>{
e.respondWith(
caches.match(e.request).then(r=>r||fetch(e.request))
)
})
