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

var precacheConfig = [["C:/hexo/==blog4==/public/2020/02/08/hello-world/index.html","94b268407be40c259e383a854d8eb953"],["C:/hexo/==blog4==/public/2020/02/10/20200210001941/20200210121948512.png","f049f252bbeb36f951752825e941186c"],["C:/hexo/==blog4==/public/2020/02/10/20200210001941/index.html","030de6f224cd92e0e6831e3d8af4d61f"],["C:/hexo/==blog4==/public/2020/02/11/分类测试/index.html","b73b4cf54ffb0811d669902c17698b4a"],["C:/hexo/==blog4==/public/2020/02/11/多个标签测试/index.html","fccc72a7722c7369431658f258e7a61f"],["C:/hexo/==blog4==/public/2020/02/11/多级分类测试（一）/index.html","fe61f2470febbeef33865b1993286983"],["C:/hexo/==blog4==/public/2020/02/11/文章目录测试/index.html","e936275083554ba22a8463b748abaf3e"],["C:/hexo/==blog4==/public/2020/02/11/文章置顶测试/index.html","8beaae88f5e09ad3eed2e1cbab122fda"],["C:/hexo/==blog4==/public/2020/02/11/标签测试/index.html","ef360c5f40ef27ff28d5d198f0c75e52"],["C:/hexo/==blog4==/public/2020/02/12/20200212172300/20200212052428659.png","41ea682631431d6a1b4d8590f96186e4"],["C:/hexo/==blog4==/public/2020/02/12/20200212172300/20200212052520973.png","b495e0b014a0fb6aa820ec431c1080c1"],["C:/hexo/==blog4==/public/2020/02/12/20200212172300/20200212052528988.png","13545c16e81cb2e0b4b190ba95d3bab3"],["C:/hexo/==blog4==/public/2020/02/12/20200212172300/20200212052601562.png","11037671fd69a7947603b72ad000f905"],["C:/hexo/==blog4==/public/2020/02/12/20200212172300/20200212052606801.png","d24f2195330ecea8b6044f9a8b4edc63"],["C:/hexo/==blog4==/public/2020/02/12/20200212172300/20200212065815377.png","76585e9de97f51fd25c6276a4aa077ae"],["C:/hexo/==blog4==/public/2020/02/12/20200212172300/20200212065838546.png","98ce87475c5dfc541396953759f36583"],["C:/hexo/==blog4==/public/2020/02/12/20200212172300/index.html","684c3f3c653d2c1bde7d2d5cbc498c09"],["C:/hexo/==blog4==/public/2020/02/12/20200212172300/markdown 图片格式.png","7ee46176e17b447f45d9b43fea7b7953"],["C:/hexo/==blog4==/public/2020/02/12/page/index.html","338af2d81cb15d5b2aa6d143929e6371"],["C:/hexo/==blog4==/public/2020/02/12/相册测试/index.html","73944aa8d685093f3f0280cf9507c0f1"],["C:/hexo/==blog4==/public/2020/02/13/20200213163707/20200213043738619.png","4ab4f1f4b1d208ac4a1458bbb274965e"],["C:/hexo/==blog4==/public/2020/02/13/20200213163707/index.html","7909cbd74076fc360774723436789be7"],["C:/hexo/==blog4==/public/2020/02/14/20200214210500/20200214090600810.png","116f4b2b35da06883ec6a9892a2fe239"],["C:/hexo/==blog4==/public/2020/02/14/20200214210500/index.html","44a75f173608a44bce8be4cf6b7b7d6f"],["C:/hexo/==blog4==/public/2020/02/14/20200214210647/20200214090652756.png","28427a1309fad1dbfbae7d31c7c12975"],["C:/hexo/==blog4==/public/2020/02/14/20200214210647/20200214090706475.png","ba5a392464fb775b675c9dc7b0043127"],["C:/hexo/==blog4==/public/2020/02/14/20200214210647/index.html","b21fcaf62bed3ec0911b7486e4e0043f"],["C:/hexo/==blog4==/public/2020/02/17/20200217192611/20200217072614139.png","d08b8bac2af0b54027b9cb2f8ab53661"],["C:/hexo/==blog4==/public/2020/02/17/20200217192611/index.html","e69e5325f5e8547de82a08fd3d24bdfb"],["C:/hexo/==blog4==/public/2020/02/18/20200218135527/index.html","da18b1a9de850d23a06c10d28632e990"],["C:/hexo/==blog4==/public/2020/02/20/Hello-blog-test/index.html","b0bb2615e84fd8dbd860124285b5c6c1"],["C:/hexo/==blog4==/public/ACGN/index.html","e36fafebe583b6b664c20b64c329be13"],["C:/hexo/==blog4==/public/Gallery/index.html","f90c8fffb4f85b5cdc9b4ecef77b7bae"],["C:/hexo/==blog4==/public/Message/index.html","71176a2c285cb3712737cfa3e870d311"],["C:/hexo/==blog4==/public/RJ/index.html","4b1b2f06366c8b3ab671cdafdacfce92"],["C:/hexo/==blog4==/public/ZL/index.html","86b7bc17561c8e0bb8bf5b33a22085d9"],["C:/hexo/==blog4==/public/about/index.html","b667c7c1768ad5a571b5fdee36ebf5f2"],["C:/hexo/==blog4==/public/archives/2020/02/index.html","60c50867df274fd9c6e979ffc90b85f4"],["C:/hexo/==blog4==/public/archives/2020/02/page/2/index.html","8406a309682758f2854d10af6cba4546"],["C:/hexo/==blog4==/public/archives/2020/index.html","56d2c2a48190f866dc7078734c3446d8"],["C:/hexo/==blog4==/public/archives/2020/page/2/index.html","36f31b107af155ebfce4a47b6b3eb93c"],["C:/hexo/==blog4==/public/archives/index.html","2cb318d5b43747860f1107d80e492595"],["C:/hexo/==blog4==/public/archives/page/2/index.html","1155ddbeaddd952afca88894b8610054"],["C:/hexo/==blog4==/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/hexo/==blog4==/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/hexo/==blog4==/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/hexo/==blog4==/public/bangumis/index.html","b955a502b380c6347759b9080f9f6d85"],["C:/hexo/==blog4==/public/books/index.html","e1c5f9baa69e67488188fbdbc42460a4"],["C:/hexo/==blog4==/public/categories/index.html","ca8460dee75296fb94da3523d9d68e58"],["C:/hexo/==blog4==/public/categories/分类测试/index.html","b35a969fb871b1d18a08624d58453531"],["C:/hexo/==blog4==/public/categories/父分类1/index.html","ea847684b9ddac1f355bb00a6d552621"],["C:/hexo/==blog4==/public/categories/父分类1/子分类1a/index.html","2cf3cded0658a48cec8d15ee8929118d"],["C:/hexo/==blog4==/public/categories/父分类1/子分类1b/index.html","16930c226656ef81d9ce39a727645cea"],["C:/hexo/==blog4==/public/categories/父分类2/index.html","10db21331678b7f4323adbb748a5dd8f"],["C:/hexo/==blog4==/public/css/index.css","3bd70ce36cb2211a8b1ff2a3f47b2241"],["C:/hexo/==blog4==/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/hexo/==blog4==/public/games/index.html","9c9a663d69e0017c3db729264b45268f"],["C:/hexo/==blog4==/public/img/02.jpg","e5382be21e1359d0bbfdd4af4c4e4024"],["C:/hexo/==blog4==/public/img/404.png","4462730df16ce3c01e07230b68d8e822"],["C:/hexo/==blog4==/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/hexo/==blog4==/public/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["C:/hexo/==blog4==/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/hexo/==blog4==/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/hexo/==blog4==/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/hexo/==blog4==/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/hexo/==blog4==/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/hexo/==blog4==/public/img/timg.gif","d90865e4e25dcaff3fa6cbfbc8830c44"],["C:/hexo/==blog4==/public/index.html","626d4a37d6fddec0abf3cbc95eb0eeaf"],["C:/hexo/==blog4==/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["C:/hexo/==blog4==/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["C:/hexo/==blog4==/public/js/sakura.js","d259eedc4ec9687b501f075693a5afbd"],["C:/hexo/==blog4==/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["C:/hexo/==blog4==/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["C:/hexo/==blog4==/public/link/index.html","bd2dedb18fd65549751eaaa0ae0c3577"],["C:/hexo/==blog4==/public/me/index.html","200fbbdb4774893187fec13e2f6732f4"],["C:/hexo/==blog4==/public/movies/index.html","7204a19b5a12b8ff52f5bfb9bd9e0449"],["C:/hexo/==blog4==/public/music/index.html","123e063b1a132339c6e294935da91afc"],["C:/hexo/==blog4==/public/page/2/index.html","dfccb1f3f68c2afb7a34724c1b910074"],["C:/hexo/==blog4==/public/tags/index.html","162bfae48b006ec22a1e92b33efd6723"],["C:/hexo/==blog4==/public/tags/标签1/index.html","641f7dc5d643428f035162f8a504060c"],["C:/hexo/==blog4==/public/tags/标签2/index.html","212a3b6727ff81181c10cc3cd80edfa3"],["C:/hexo/==blog4==/public/tags/标签测试/index.html","c9ed7651d2cc6099414443f9e7d679fa"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


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
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
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
    var navigateFallback = '';
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







