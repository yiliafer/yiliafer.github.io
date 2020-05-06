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

var precacheConfig = [["C:/Hexo/blog/public/2015/08/25/私有云服务指南/index.html","8d5d3b91e69d41f723ac8367c35cfc94"],["C:/Hexo/blog/public/2020/02/10/20200210001941/20200210121948512.png","f049f252bbeb36f951752825e941186c"],["C:/Hexo/blog/public/2020/02/10/20200210001941/index.html","2ee036da400386b41806bfd07a302834"],["C:/Hexo/blog/public/2020/02/11/分类测试/index.html","b2bc292799fdceb0dc94213ac361f102"],["C:/Hexo/blog/public/2020/02/11/多个标签测试/index.html","a5b3c49514b7aaa7b7b3b7fb28fecaa4"],["C:/Hexo/blog/public/2020/02/11/多级分类测试（一）/index.html","67c2ef66db66fd602b0de0e75431c1a5"],["C:/Hexo/blog/public/2020/02/11/文章目录测试/index.html","e463b8e37e79ff60f70e55a4dfd297a7"],["C:/Hexo/blog/public/2020/02/11/文章置顶测试/index.html","c935dcd0b79cf5f4ecdaa57e8dd3df3a"],["C:/Hexo/blog/public/2020/02/11/标签测试/index.html","429a24c7ea9f5929b9ced2ed9edf9d54"],["C:/Hexo/blog/public/2020/02/12/20200212172300/20200212052428659.png","41ea682631431d6a1b4d8590f96186e4"],["C:/Hexo/blog/public/2020/02/12/20200212172300/20200212052520973.png","b495e0b014a0fb6aa820ec431c1080c1"],["C:/Hexo/blog/public/2020/02/12/20200212172300/20200212052528988.png","13545c16e81cb2e0b4b190ba95d3bab3"],["C:/Hexo/blog/public/2020/02/12/20200212172300/20200212052601562.png","11037671fd69a7947603b72ad000f905"],["C:/Hexo/blog/public/2020/02/12/20200212172300/20200212052606801.png","d24f2195330ecea8b6044f9a8b4edc63"],["C:/Hexo/blog/public/2020/02/12/20200212172300/20200212065815377.png","76585e9de97f51fd25c6276a4aa077ae"],["C:/Hexo/blog/public/2020/02/12/20200212172300/20200212065838546.png","98ce87475c5dfc541396953759f36583"],["C:/Hexo/blog/public/2020/02/12/20200212172300/index.html","bf4da51a55f0b137b1b7e8118dd96b33"],["C:/Hexo/blog/public/2020/02/12/20200212172300/markdown 图片格式.png","7ee46176e17b447f45d9b43fea7b7953"],["C:/Hexo/blog/public/2020/02/12/page/index.html","6dba28b5b6795f279a07c3e5ec099ff3"],["C:/Hexo/blog/public/2020/02/12/相册测试/index.html","2d8721c0c973d654f5ed573b448cd686"],["C:/Hexo/blog/public/2020/02/13/20200213163707/20200213043738619.png","4ab4f1f4b1d208ac4a1458bbb274965e"],["C:/Hexo/blog/public/2020/02/13/20200213163707/index.html","bd0a40568ce29dcf82b0f12a595c73ec"],["C:/Hexo/blog/public/2020/02/14/20200214210500/20200214090600810.png","116f4b2b35da06883ec6a9892a2fe239"],["C:/Hexo/blog/public/2020/02/14/20200214210500/index.html","c56a600f226d4ec95d0ea1eb64ffc445"],["C:/Hexo/blog/public/2020/02/14/20200214210647/20200214090652756.png","28427a1309fad1dbfbae7d31c7c12975"],["C:/Hexo/blog/public/2020/02/14/20200214210647/20200214090706475.png","ba5a392464fb775b675c9dc7b0043127"],["C:/Hexo/blog/public/2020/02/14/20200214210647/index.html","776bda9ee427752acf3706c4233333ab"],["C:/Hexo/blog/public/2020/02/17/20200217192611/20200217072614139.png","d08b8bac2af0b54027b9cb2f8ab53661"],["C:/Hexo/blog/public/2020/02/17/20200217192611/index.html","0bcfb84f8ded7c45ee29a2cf8dd78f7d"],["C:/Hexo/blog/public/2020/02/18/20200218135527/index.html","585b61c0a1de38dbacd1b3e68488e867"],["C:/Hexo/blog/public/2020/02/20/Hello-blog-test/index.html","6cd525099127baf75175787b6f992aef"],["C:/Hexo/blog/public/2020/03/17/hello-world/index.html","171b5e485ad80ecd91d30529eaa46c03"],["C:/Hexo/blog/public/ACGN/index.html","4c068f1dbe68e70b23b7bf480e803f77"],["C:/Hexo/blog/public/Gallery/index.html","78982a6258371411e5635b893aa2f2fa"],["C:/Hexo/blog/public/Message/index.html","c7fafa09eca2aff77b3aab736dd9ef2b"],["C:/Hexo/blog/public/RJ/index.html","0842ccf3f45f3accc60965a82f8ba8ac"],["C:/Hexo/blog/public/ZL/index.html","27ddcfcb8ffbd3abc31c5bf7c598c02d"],["C:/Hexo/blog/public/about/index.html","ee6bd208f99f7c6a7e2e39f208344e7f"],["C:/Hexo/blog/public/archives/2015/08/index.html","02761ce9ecb957cc71d826ebed492c91"],["C:/Hexo/blog/public/archives/2015/index.html","9d373e6adeb8f0513d02d0227627d230"],["C:/Hexo/blog/public/archives/2020/02/index.html","ad0c3b361fd71ffa3d92f2e273e14c3d"],["C:/Hexo/blog/public/archives/2020/02/page/2/index.html","0cf4dc50799699314bb284154926a1f7"],["C:/Hexo/blog/public/archives/2020/03/index.html","db24f2c586d3cb7549b0d754fedfb5e9"],["C:/Hexo/blog/public/archives/2020/index.html","8a89a1d1ba8884b20cf22c520a314956"],["C:/Hexo/blog/public/archives/2020/page/2/index.html","aa0ce5eb59f1e4aacbec09e4fb33e7d3"],["C:/Hexo/blog/public/archives/index.html","31b0e05dfc640730fdc8f93df9bbb09e"],["C:/Hexo/blog/public/archives/page/2/index.html","0ffbc39c97048418ce9bba83adaa245b"],["C:/Hexo/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["C:/Hexo/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["C:/Hexo/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["C:/Hexo/blog/public/bangumis/index.html","27492aeaa75965b01c0fa806700fb56c"],["C:/Hexo/blog/public/books/index.html","1c21edffc6b6c4df2a7940edcc24a792"],["C:/Hexo/blog/public/categories/index.html","859bf467089b8ac5ef28be9d0abc7cd4"],["C:/Hexo/blog/public/categories/分类测试/index.html","af02eb0a3a92cdcc20f5726254ff5c80"],["C:/Hexo/blog/public/categories/父分类1/index.html","2e1d455fc39435d04195513f8857ae55"],["C:/Hexo/blog/public/categories/父分类1/子分类1a/index.html","e04cd24e0118402bfe5a49119232981c"],["C:/Hexo/blog/public/categories/父分类1/子分类1b/index.html","b8241b6cbc640d162cdf746b60d69c94"],["C:/Hexo/blog/public/categories/父分类2/index.html","219405709a2ab5fa08cd4cc02446beb9"],["C:/Hexo/blog/public/css/index.css","3bd70ce36cb2211a8b1ff2a3f47b2241"],["C:/Hexo/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/Hexo/blog/public/games/index.html","1f98a6616b9ff8e15e6561d30ceb2da9"],["C:/Hexo/blog/public/img/02.jpg","e5382be21e1359d0bbfdd4af4c4e4024"],["C:/Hexo/blog/public/img/404.png","4462730df16ce3c01e07230b68d8e822"],["C:/Hexo/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/Hexo/blog/public/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["C:/Hexo/blog/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["C:/Hexo/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/Hexo/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/Hexo/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/Hexo/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["C:/Hexo/blog/public/img/timg.gif","d90865e4e25dcaff3fa6cbfbc8830c44"],["C:/Hexo/blog/public/index.html","dd4580b4f81e142fcdc9ccc9393ab285"],["C:/Hexo/blog/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["C:/Hexo/blog/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["C:/Hexo/blog/public/js/sakura.js","d259eedc4ec9687b501f075693a5afbd"],["C:/Hexo/blog/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["C:/Hexo/blog/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["C:/Hexo/blog/public/link/index.html","89ebcedaf3eb12a77508faed818406e9"],["C:/Hexo/blog/public/me/index.html","8ffe2ec370db33287200ef88c7090c85"],["C:/Hexo/blog/public/movies/index.html","8751201aa902c3bb251e24f63893e120"],["C:/Hexo/blog/public/music/index.html","2fe16053863d0d7ecf5cbf038c08238b"],["C:/Hexo/blog/public/page/2/index.html","657358c4a35a554ae027736c0373a439"],["C:/Hexo/blog/public/tags/index.html","0d03d483778b293a6e68d6611feff923"],["C:/Hexo/blog/public/tags/标签1/index.html","2d935c413a5f40bccceac652347dba83"],["C:/Hexo/blog/public/tags/标签2/index.html","66afa0672291a10e5472fc901f6115e7"],["C:/Hexo/blog/public/tags/标签测试/index.html","809d9f8a5f3e869a2a4dfb37c7355f23"]];
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







