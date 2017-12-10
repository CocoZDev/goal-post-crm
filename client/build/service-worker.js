"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","d02649721129d5fc3f585b04ae0bb288"],["/static/css/main.5ad4d323.css","5d260089bad217486bf4238c72b4b47f"],["/static/js/main.f5ac9542.js","19e8e572b9b45e200bb29b7250de2934"],["/static/media/Brian.0ed0a75b.jpg","0ed0a75bee1d7f4052adb8c84216b110"],["/static/media/Dennis.6603bccb.jpg","6603bccb9afb1ed615b604b9649d287f"],["/static/media/Guiyu.c09c89f5.jpg","c09c89f571d0c5185917a27ac292a7ed"],["/static/media/Tatianna.f4dd2e79.jpg","f4dd2e79d55c6ce6ddcf8ad76a42451d"],["/static/media/jeannine.f5bf2679.jpg","f5bf26791c7472271f2fad02445c59b4"],["/static/media/t-1.ef1ac27d.jpg","ef1ac27de677bf4b5dade684b2fc3e6c"],["/static/media/t-2.669dd8bb.jpg","669dd8bb3343f2e4d10ec9361d957e8e"],["/static/media/t-3.1ae537f7.jpg","1ae537f7bcb36bed73ee02e3c440aec5"],["/static/media/team.e859209f.jpg","e859209ffbe06c9d5c0709f013f3eafb"],["/static/media/thumb-up.a3a96217.jpg","a3a9621770b222062b2d8f41315a98a4"],["/static/media/tools.1f92a5a2.png","1f92a5a2aeefad71a086ce1fe7f2902d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});