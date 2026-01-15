'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9d1746e3286b55ca282445e9539b9b70",
"assets/AssetManifest.bin.json": "446c835d47544c76b8aed8c2d4cd7112",
"assets/assets/icons/delete.svg": "94050105dce6b2c15c9ca91b4418e774",
"assets/assets/icons/edit.svg": "a5e13b68e8d112d07fde80d8f30f380a",
"assets/assets/icons/filter.svg": "244d5f228272bd56be7a5f034bae1f74",
"assets/assets/images/app_logo.png": "b2062adf26b31340fdef166d94fac887",
"assets/assets/images/auth_bg_image.jpg": "22d8db88fc623e8c4517c95fdeff03be",
"assets/assets/images/people.png": "2fe8e526d3910f3eb4e03c5604c38ec2",
"assets/assets/images/placeholder.png": "a59bc6e4929de09af23907f0c135c0ff",
"assets/assets/images/splash_logo.png": "7d41e6ed33fb820e7481fa70d55f2a04",
"assets/assets/lotties/logout_lottie.json": "66118d0194a959c181634a1708bb93b8",
"assets/assets/lotties/no_data_lottie.json": "283381da70fcfab1f26500a1ab59bc04",
"assets/FontManifest.json": "6c532046cfea0fef7bf797ac7a92e532",
"assets/fonts/MaterialIcons-Regular.otf": "eef9fbc4be883bb4c14c82664ac3ad44",
"assets/NOTICES": "6c694a0239564e313380604704d65f6b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "a1329bf73eaba61f173b329cc750501c",
"assets/packages/flutter_iconpicker/fonts/fa-brands-400.ttf": "b7dee83cb5ee2c47b053e2620f4bbb78",
"assets/packages/flutter_iconpicker/fonts/fa-regular-400.ttf": "3c264849ff4eb9b6e99eab9cd54c80ae",
"assets/packages/flutter_iconpicker/fonts/fa-solid-900.ttf": "0a95f951745ba02faa8773ea6a1ebaed",
"assets/packages/flutter_iconpicker/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "1fcba7a59e49001aa1b4409a25d425b0",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "51ef80db2c58efdab8b70f6512e76832",
"firebase-messaging-sw.js": "005ec75f87102b05e0675215e59b57e7",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "4ab624894a1cd3b1024529185332257c",
"icons/icon-192.png": "609a8e7e28802b9c446068a86ce43f43",
"icons/icon-512.png": "3afdc7ebc94200e284c50b9218fc307b",
"icons/Icon-maskable-192.png": "679a31f67ca998e6e4debcb25e8c9bef",
"icons/Icon-maskable-512.png": "58c1bc696239b2fcf14bc0345ed34387",
"index.html": "625f4ccf84de28d26f7821be115de2da",
"/": "625f4ccf84de28d26f7821be115de2da",
"main.dart.js": "4b12032653ac573ae1f0945c3b235ed6",
"manifest.json": "23997fb942516680b6e3d7c8e9407817",
"splash/img/dark-1x.png": "c420ad0762a8656819d288d5a5d7a871",
"splash/img/dark-2x.png": "83741de53d5540443bf4f2f216019f54",
"splash/img/dark-3x.png": "217a549660697a52b7bac21aab2e0e7f",
"splash/img/dark-4x.png": "10a52e5828eb25692e3e6025103717e0",
"splash/img/light-1x.png": "c420ad0762a8656819d288d5a5d7a871",
"splash/img/light-2x.png": "83741de53d5540443bf4f2f216019f54",
"splash/img/light-3x.png": "217a549660697a52b7bac21aab2e0e7f",
"splash/img/light-4x.png": "10a52e5828eb25692e3e6025103717e0",
"version.json": "30db4e1b9e8f0a3eae06ecb76fb0b08e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
