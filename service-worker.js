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

var precacheConfig = [["C:/Hexo/blog/public/2015/08/25/私有云服务指南/index.html","633aca91f49985d3308af58fbac1fced"],["C:/Hexo/blog/public/2020/02/10/20200210001941/20200210121948512.png","f049f252bbeb36f951752825e941186c"],["C:/Hexo/blog/public/2020/02/10/20200210001941/index.html","c876b26d21e5f04c3d0e3e0b311f79ae"],["C:/Hexo/blog/public/2020/02/11/分类测试/index.html","4d71a601ebd37c5becda70be9125e72e"],["C:/Hexo/blog/public/2020/02/11/多个标签测试/index.html","f5a95e0e03e1a0f8710b0272f7d472e7"],["C:/Hexo/blog/public/2020/02/11/多级分类测试（一）/index.html","f68e40ee15f4d67f5bbfa73067dc0b82"],["C:/Hexo/blog/public/2020/02/11/文章目录测试/index.html","6ab20df423dcbd9ba27b8350752d5288"],["C:/Hexo/blog/public/2020/02/11/文章置顶测试/index.html","cabe9d5edd1fc506126608609c260b4e"],["C:/Hexo/blog/public/2020/02/11/标签测试/index.html","3953dfc3272940abf770af16f4c47098"],["C:/Hexo/blog/public/2020/02/12/20200212172300/20200212052428659.png","41ea682631431d6a1b4d8590f96186e4"],["C:/Hexo/blog/public/2020/02/12/20200212172300/20200212052520973.png","b495e0b014a0fb6aa820ec431c1080c1"],["C:/Hexo/blog/public/2020/02/12/20200212172300/20200212052528988.png","13545c16e81cb2e0b4b190ba95d3bab3"],["C:/Hexo/blog/public/2020/02/12/20200212172300/20200212052601562.png","11037671fd69a7947603b72ad000f905"],["C:/Hexo/blog/public/2020/02/12/20200212172300/20200212052606801.png","d24f2195330ecea8b6044f9a8b4edc63"],["C:/Hexo/blog/public/2020/02/12/20200212172300/20200212065815377.png","76585e9de97f51fd25c6276a4aa077ae"],["C:/Hexo/blog/public/2020/02/12/20200212172300/20200212065838546.png","98ce87475c5dfc541396953759f36583"],["C:/Hexo/blog/public/2020/02/12/20200212172300/index.html","5d84e09c88b0d710fe4c7e318f39024f"],["C:/Hexo/blog/public/2020/02/12/20200212172300/markdown 图片格式.png","7ee46176e17b447f45d9b43fea7b7953"],["C:/Hexo/blog/public/2020/02/12/page/index.html","4237f1e9dc5fd65e526638fd8a3a0d27"],["C:/Hexo/blog/public/2020/02/12/相册测试/index.html","f8391a697e9d51db834a5d554f0139b1"],["C:/Hexo/blog/public/2020/02/13/20200213163707/20200213043738619.png","4ab4f1f4b1d208ac4a1458bbb274965e"],["C:/Hexo/blog/public/2020/02/13/20200213163707/index.html","f905f1e6a22478a2f2363fd1936b5148"],["C:/Hexo/blog/public/2020/02/14/20200214210500/20200214090600810.png","116f4b2b35da06883ec6a9892a2fe239"],["C:/Hexo/blog/public/2020/02/14/20200214210500/index.html","7b35bf75fe140efbf06b3420f0868c0f"],["C:/Hexo/blog/public/2020/02/14/20200214210647/20200214090652756.png","28427a1309fad1dbfbae7d31c7c12975"],["C:/Hexo/blog/public/2020/02/14/20200214210647/20200214090706475.png","ba5a392464fb775b675c9dc7b0043127"],["C:/Hexo/blog/public/2020/02/14/20200214210647/index.html","6d170be2a24c9d86d23922acb4a91b98"],["C:/Hexo/blog/public/2020/02/17/20200217192611/20200217072614139.png","d08b8bac2af0b54027b9cb2f8ab53661"],["C:/Hexo/blog/public/2020/02/17/20200217192611/index.html","c4dd0121ed0311cfe436857ab1bb55d6"],["C:/Hexo/blog/public/2020/02/18/20200218135527/index.html","ebe198709d1a807bd975c467f9d8c399"],["C:/Hexo/blog/public/2020/02/20/Hello-blog-test/index.html","301657733aa94b3078d665e7cde7f5ca"],["C:/Hexo/blog/public/2020/03/17/hello-world/index.html","6382a33625c287bef36d3f9cbaf3e9b4"],["C:/Hexo/blog/public/2020/05/06/20200506112152/index.html","d6327e2c706f88b98953cb6eb6ac5bf6"],["C:/Hexo/blog/public/ACGN/index.html","f2aaa385cfa411913fce2cc705fbeb07"],["C:/Hexo/blog/public/Gallery/index.html","bbda2f099c1ca8cd2044ee777e22013f"],["C:/Hexo/blog/public/Message/index.html","9192bdc5c4272c1d35fb0525b676c4fc"],["C:/Hexo/blog/public/RJ/index.html","39c817c0e590d0f3e69da0ccb1ceb66a"],["C:/Hexo/blog/public/ZL/index.html","d3cd0f96769252999768d9aaa2fa4893"],["C:/Hexo/blog/public/about/index.html","fced51a1c6c31dabf393272be1e2cb8b"],["C:/Hexo/blog/public/archives/2015/08/index.html","6293692e715c378a85b598481e96827d"],["C:/Hexo/blog/public/archives/2015/index.html","9f43be5474d7510737adaf395b9659fb"],["C:/Hexo/blog/public/archives/2020/02/index.html","e37d90b3769ae07dbc04b3907b50432b"],["C:/Hexo/blog/public/archives/2020/02/page/2/index.html","820ced469039914058dc71fce80d73c3"],["C:/Hexo/blog/public/archives/2020/03/index.html","0edd1e80a7ef22531039e5e8094b4782"],["C:/Hexo/blog/public/archives/2020/05/index.html","d43979f792e7fefe2bfa9c5f82f3e956"],["C:/Hexo/blog/public/archives/2020/index.html","e08747e3cce868027229836a9dc6c6d3"],["C:/Hexo/blog/public/archives/2020/page/2/index.html","b0f82d2e81c48af603fbf1a62136128e"],["C:/Hexo/blog/public/archives/index.html","896ad75aa018c50fd18fcaa7d881fe25"],["C:/Hexo/blog/public/archives/page/2/index.html","5aeced8758b5e0d0e1bc4e18aa78e6e0"],["C:/Hexo/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/Hexo/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/Hexo/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/Hexo/blog/public/bangumis/index.html","8a8b516d4d4cf461acc7264d1406363a"],["C:/Hexo/blog/public/books/index.html","d0a33f39a4cce4b25b5abf2bc90bab5d"],["C:/Hexo/blog/public/categories/index.html","1cfbbdf3e7ac3db8cb0d626bf126589a"],["C:/Hexo/blog/public/categories/分类测试/index.html","5a6ec856ee75f15b5fdc792d20970396"],["C:/Hexo/blog/public/categories/父分类1/index.html","248f0596671ee80a16462d84c4c56c2b"],["C:/Hexo/blog/public/categories/父分类1/子分类1a/index.html","0193e9fd98d38f7d5fc101110c4fba06"],["C:/Hexo/blog/public/categories/父分类1/子分类1b/index.html","e87519f652e1a9af763da341bc3bed96"],["C:/Hexo/blog/public/categories/父分类2/index.html","632e92900e820d2649f3325f24ad3ddb"],["C:/Hexo/blog/public/css/index.css","3bd70ce36cb2211a8b1ff2a3f47b2241"],["C:/Hexo/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Hexo/blog/public/games/index.html","c82c3bce46fdfbd1039541316433b830"],["C:/Hexo/blog/public/img/02.jpg","e5382be21e1359d0bbfdd4af4c4e4024"],["C:/Hexo/blog/public/img/404.png","4462730df16ce3c01e07230b68d8e822"],["C:/Hexo/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Hexo/blog/public/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["C:/Hexo/blog/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Hexo/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Hexo/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Hexo/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Hexo/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/Hexo/blog/public/img/timg.gif","d90865e4e25dcaff3fa6cbfbc8830c44"],["C:/Hexo/blog/public/index.html","9bbbff585e1a69f1a2c7292290314dc7"],["C:/Hexo/blog/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["C:/Hexo/blog/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["C:/Hexo/blog/public/js/sakura.js","d259eedc4ec9687b501f075693a5afbd"],["C:/Hexo/blog/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["C:/Hexo/blog/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["C:/Hexo/blog/public/link/index.html","40a557e037d70ebe827646b53ed556bc"],["C:/Hexo/blog/public/me/index.html","811a7029ef56851c74efa7e5b190579d"],["C:/Hexo/blog/public/movies/index.html","622f3e486bbccda2a07efa0455851c25"],["C:/Hexo/blog/public/music/index.html","a3ff210b2400a67f9f94a19f4eda750d"],["C:/Hexo/blog/public/page/2/index.html","daad8845b5a85779e08b16fc3d0ba265"],["C:/Hexo/blog/public/tags/index.html","d30dcd041ad7a3860d11538243acf795"],["C:/Hexo/blog/public/tags/标签1/index.html","e99e4e17dfe178f61aae9e0771898e0a"],["C:/Hexo/blog/public/tags/标签2/index.html","6e1397b5abe9c5539c9e7a1eb5efeec7"],["C:/Hexo/blog/public/tags/标签测试/index.html","0cb88d57904429722f8d4bd40b8bbaa8"]];
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







