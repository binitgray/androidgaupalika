if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let n={};const r=e=>a(e,c),f={module:{uri:c},exports:n,require:r};s[c]=Promise.all(i.map((e=>f[e]||r(e)))).then((e=>(t(...e),n)))}}define(["./workbox-c2c0676f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/207-64b44891e5284887.js",revision:"rug0_isystwTaUjgStU6B"},{url:"/_next/static/chunks/383-24096e550821a84f.js",revision:"rug0_isystwTaUjgStU6B"},{url:"/_next/static/chunks/403-1ca715cf38bbc366.js",revision:"rug0_isystwTaUjgStU6B"},{url:"/_next/static/chunks/862-0cf495d4ed946b18.js",revision:"rug0_isystwTaUjgStU6B"},{url:"/_next/static/chunks/app/_not-found/page-570055432bb185cf.js",revision:"rug0_isystwTaUjgStU6B"},{url:"/_next/static/chunks/app/layout-c7574d5924465208.js",revision:"rug0_isystwTaUjgStU6B"},{url:"/_next/static/chunks/app/page-b9352bc5408599ca.js",revision:"rug0_isystwTaUjgStU6B"},{url:"/_next/static/chunks/app/upload/page-bee707befb033e99.js",revision:"rug0_isystwTaUjgStU6B"},{url:"/_next/static/chunks/fd9d1056-62aaf4b921c84028.js",revision:"rug0_isystwTaUjgStU6B"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"rug0_isystwTaUjgStU6B"},{url:"/_next/static/chunks/main-311792a8e7005e67.js",revision:"rug0_isystwTaUjgStU6B"},{url:"/_next/static/chunks/main-app-b2597c9a9817ee2c.js",revision:"rug0_isystwTaUjgStU6B"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"rug0_isystwTaUjgStU6B"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"rug0_isystwTaUjgStU6B"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-f121764ce8354394.js",revision:"rug0_isystwTaUjgStU6B"},{url:"/_next/static/css/10cf04b6acf7a3c1.css",revision:"10cf04b6acf7a3c1"},{url:"/_next/static/css/2f71e0d51b6954c9.css",revision:"2f71e0d51b6954c9"},{url:"/_next/static/css/704c741e919a40f9.css",revision:"704c741e919a40f9"},{url:"/_next/static/css/acd57337509f9a4e.css",revision:"acd57337509f9a4e"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"0b80f665"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/revicons.652e7269.eot",revision:"652e7269"},{url:"/_next/static/media/revicons.b96bdb22.ttf",revision:"b96bdb22"},{url:"/_next/static/media/revicons.ff59b316.woff",revision:"ff59b316"},{url:"/_next/static/media/slick.25572f22.eot",revision:"25572f22"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"653a4cbb"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"6aa1ee46"},{url:"/_next/static/media/slick.f895cfdf.svg",revision:"f895cfdf"},{url:"/_next/static/rug0_isystwTaUjgStU6B/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/rug0_isystwTaUjgStU6B/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/assets/css/style.css",revision:"fcb98064b4928c3326deade5211585c2"},{url:"/assets/images/1.jpeg",revision:"fad9341475ced8837c54e4b4a4b5e7bf"},{url:"/assets/images/10.jpeg",revision:"87669a0f5db94fdb4c595662c8eafc96"},{url:"/assets/images/11.jpeg",revision:"0783caf0826ee1a9a5123606ce2850b6"},{url:"/assets/images/2.jpeg",revision:"2cd1028cc36bd2c8ae441ab795b84dcf"},{url:"/assets/images/3.jpeg",revision:"c2fa0c85de5e68b3af6c24b3c8427a1d"},{url:"/assets/images/4.jpeg",revision:"e8ef2a7eb658cc8327db5bcaa1a7dac8"},{url:"/assets/images/5.jpeg",revision:"a598e701be1e75e1cc43e5911d53773c"},{url:"/assets/images/6.jpeg",revision:"cf7c3c522bfbc05620a15faa3a804198"},{url:"/assets/images/7.jpeg",revision:"2e56abe7ae5c8267bfefcd35970e556c"},{url:"/assets/images/8.jpeg",revision:"de72bf0a63c5a58cbe186eca8eff84f5"},{url:"/assets/images/9.jpeg",revision:"f63092e23d1328620fae3ba644fe93c0"},{url:"/assets/images/guapalika.png",revision:"9b824df26d4d38d0c70b0f148e2bc45b"},{url:"/assets/images/profile.jpg",revision:"849c29fe823fcbc573db99daf2f5b798"},{url:"/assets/images/sun.png",revision:"ae0851881b386bafe16ac3cd4f5b1547"},{url:"/assets/video/himali.mp4",revision:"7705825109a56696d9da7f29f5af5f99"},{url:"/manifest.json",revision:"5c6d200815c19b01660be131ae7dbbe2"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));