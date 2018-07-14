importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "yandex-dialogs-client",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.da3556e4128e16d820cf.js",
    "revision": "cfc8c6c629595b779e618845d62f7ff7"
  },
  {
    "url": "/_nuxt/layouts_default.542ba7dc5169a189b640.js",
    "revision": "7314cb432daf78e0072b8b1918888c1d"
  },
  {
    "url": "/_nuxt/manifest.d195afa5b33d567e93ae.js",
    "revision": "85c879a923109494b14ce0fb66864ff9"
  },
  {
    "url": "/_nuxt/pages_index.c347a9b096cbe33be1b8.js",
    "revision": "9b957b6e41aaa5a17d40671f975c32b4"
  },
  {
    "url": "/_nuxt/vendor.3526f8eeda983f1cdbf4.js",
    "revision": "23e2e7430466749f2743ad6ffcca1b20"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

