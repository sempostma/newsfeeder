/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["app.min.css","9ecf900f92113d7a4bf60de946f978f1"],["app.min.js","12803b10eb25370272cc1d6a56f8cb78"],["browserconfig.xml","6f8c76720fa769757a9bc23090d5f69d"],["favicon.ico","ab9a2fbba191e8977d774486d1e84cc7"],["humans.txt","f91f01452959ae1e918282f131b46dc2"],["icons/android-chrome-144x144.png","0ca06c23d8380d23665b8b0ebecb8752"],["icons/android-chrome-168x168.png","36a206d1aa01610d271f47f5d99ddc44"],["icons/android-chrome-192x192.png","6f3e5d0f59bd7b619a16ae09d56ad06e"],["icons/android-chrome-256x256.png","e76c52902d434f3cdeef42c3afc406af"],["icons/android-chrome-36x36.png","d6ac4fe3744b45ace30dac1fa0f94303"],["icons/android-chrome-384x384.png","28779af8024b33f54460727eb6b06f05"],["icons/android-chrome-48x48.png","dcf9e9454e43370a8dd61d68332c4d14"],["icons/android-chrome-512x512.png","704e2b0e12ad219c846b9258a3c57f54"],["icons/android-chrome-72x72.png","9228fa976f102973effcff670ceab4e8"],["icons/android-chrome-96x96.png","6bacc384d282e26e839582beeac8801d"],["icons/apple-touch-icon-114x114-precomposed.png","a2887bc6ed7b8e92bbe9dd64f881e850"],["icons/apple-touch-icon-114x114.png","dcff8ecbcda0d93ab541265610cfcd80"],["icons/apple-touch-icon-120x120-precomposed.png","3bb84c81f6c027444c3dbf26bcb533e0"],["icons/apple-touch-icon-120x120.png","57fb22d3210fb9495403f043f09d1db3"],["icons/apple-touch-icon-144x144-precomposed.png","b96abb985b8d40a735a775acc02f4b90"],["icons/apple-touch-icon-144x144.png","418e141700254b94e6b8032751a7ed9d"],["icons/apple-touch-icon-152x152-precomposed.png","19f7a6658532bd7e7c58cca4cf1fa646"],["icons/apple-touch-icon-152x152.png","a3b901a726a05d129fe57ab2cbdf63bd"],["icons/apple-touch-icon-180x180-precomposed.png","7eca868c157bc1c90fc012e43a33c71c"],["icons/apple-touch-icon-180x180.png","e9d856457fdf53ac0b63742bbeb6de8f"],["icons/apple-touch-icon-57x57-precomposed.png","7e49df60b336d36b8ec1debed34b0abe"],["icons/apple-touch-icon-57x57.png","fab864c35cb04b90b021e88de1425430"],["icons/apple-touch-icon-60x60-precomposed.png","060db24a31676f075c3c901e0aebd272"],["icons/apple-touch-icon-60x60.png","9e5a2724606f56161c76f05a48848719"],["icons/apple-touch-icon-72x72-precomposed.png","5519b59a2eb3100c5933717507a9e239"],["icons/apple-touch-icon-72x72.png","e9f779674072091b1fcd4a780cbb82fb"],["icons/apple-touch-icon-76x76-precomposed.png","8302e161ab29cb3c227ca69374995f16"],["icons/apple-touch-icon-76x76.png","25446739a7b8c11290731bb18ecf6943"],["icons/apple-touch-icon-precomposed.png","7eca868c157bc1c90fc012e43a33c71c"],["icons/apple-touch-icon.png","e9d856457fdf53ac0b63742bbeb6de8f"],["icons/favicon-16x16.png","58542a04209b5d2377e9fbeeaee42c93"],["icons/favicon-32x32.png","ca572862844e207dde5bbf0d2f7732e4"],["icons/favicon.ico","86a317f5ccf7fccad6ee8d61cdc69c05"],["icons/mstile-144x144.png","0ca06c23d8380d23665b8b0ebecb8752"],["icons/mstile-150x150.png","c1ab7bd9eff45593519bee6f575ccec1"],["icons/mstile-310x150.png","602bdc751d7f41489034681c9f9d1aeb"],["icons/mstile-310x310.png","b7fe860683906d17c25ec5d8ac08937a"],["icons/mstile-70x70.png","737260863d5d2cb84138046a6e36fde8"],["icons/safari-pinned-tab.svg","0ea2886a53215eb3192acdcd161a3920"],["index.html","eac5a8f1b37d2048801d066b5f5033a3"],["logo.png","455caf41ba6906b2d697ad0377546191"],["manifest.json","46a460141c11ac198be7441a4414005e"],["robots.txt","a9a5dffdb4e04faf7303f0561cbf3f89"],["static/Material-Design-Iconic-Font.ttf","b351bd62abcd96e924d9f44a3da169a7"],["static/Material-Design-Iconic-Font.woff","d2a55d331bdd1a7ea97a8a1fbb3c569c"],["static/Material-Design-Iconic-Font.woff2","a4d31128b633bc0b1cc1f18a34fb3851"],["static/add-feed-loading.png","d39aaea909000b0a95c5c2bdb7c149f5"],["static/add-feed.png","a06e7d3ce79111f97245f5d93aec63ad"],["static/chrome-enable-pwa.png","1ed3fd465c4f23f7dcce104372d3968d"],["static/fa-brands-400.eot","e8019d507e8cb51d169ab4f94a0cda12"],["static/fa-brands-400.svg","83e6c29fb363b2f0ea6cc18fefff729c"],["static/fa-brands-400.ttf","fdf44bc43e8fa2358bbb7d9165d78455"],["static/fa-brands-400.woff","da408238128b876cbda6424391f1566f"],["static/fa-brands-400.woff2","6814d0e8136d34e313623eb7129d538e"],["static/fa-regular-400.eot","e6c93cb47e716b579264a5fdfbf7e84d"],["static/fa-regular-400.svg","ba2a91dc95e6cfdc4b2a186a7ba83e29"],["static/fa-regular-400.ttf","8d220c793e2612bd131ed8522c54669f"],["static/fa-regular-400.woff","dad90637f797356bbc70d2664832e0b6"],["static/fa-regular-400.woff2","8d9ab84bfe87a3f77112a6698cf639fb"],["static/fa-solid-900.eot","ea363ed422723673917901680be9b37c"],["static/fa-solid-900.svg","de1d242d8acb26ec43c0d071fe78e72d"],["static/fa-solid-900.ttf","132e9759d93e4eefd7cdde0d7a322991"],["static/fa-solid-900.woff","2d0415fa29ea596b7a02c78eddeede20"],["static/fa-solid-900.woff2","b75b4bfe0d58faeced5006c785eaae23"],["static/feeds.png","7d136da7f6a36ee083c6e54a6ec12b7e"],["static/iconnotfound.png","59e452e02b3c07036c8b93dfa06e232d"],["static/ionicons.eot","19e65b89cee273a249fba4c09b951b74"],["static/ionicons.svg","aff28a207631f39ee0272d5cdde43ee7"],["static/ionicons.ttf","dd4781d1acc57ba4c4808d1b44301201"],["static/ionicons.woff","2c159d0d05473040b53ec79df8797d32"],["static/logo.png","455caf41ba6906b2d697ad0377546191"],["static/menu.png","6d2efbac8c841cc7ddea8c001aa6c01c"],["static/news-feed-added-item.png","028e92fffa25f76d217cb95918cb056d"],["static/news-feed-initial.png","49f350d24a5e33bb4c2833df51fc8a34"],["static/news-feed-loading.png","75c1f2294a839a0f0728ae5a6e276053"],["static/news-feed.png","df8a43e7df334d79df6e9967de5cfb55"],["static/news-search.png","da56b25db8311a5ec76137164bbeb41c"],["static/notfound.png","867b6899bdbc0d0344410d6fd4b8dda8"],["static/opml.svg","93bf304adbc38b6bc6a46affed72aba1"],["static/recommended-2.png","029ba072fe55996b913587c1baf2edb0"],["static/recommended.png","da9247fbefcbd2008f897b847dbd60bb"],["static/search-feed.png","5a13f902bbf516d6d943a20b82d81c27"]];
var cacheName = 'sw-precache-v3-newsfeeder-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = 'https://newsfeeder.esstudio.site/index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







