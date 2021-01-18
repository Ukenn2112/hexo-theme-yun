/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "55a3942ac8cb98ffd95ecbbde76cbda6"
  },
  {
    "url": "about.html",
    "revision": "22bb1cd86ef603b141d0c264c13fa5bb"
  },
  {
    "url": "assets/css/0.styles.13924602.css",
    "revision": "2ea3e7ba4c7deed75dc47c526d6d4bef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.719304c1.js",
    "revision": "6dd648d2a10b4247ff5c6f7911d31dfc"
  },
  {
    "url": "assets/js/11.bbb583ed.js",
    "revision": "a1503cbb3224077d3ce214046c7761ba"
  },
  {
    "url": "assets/js/12.f3b86a9a.js",
    "revision": "9be095f598e50515ec2d4bd7600a7744"
  },
  {
    "url": "assets/js/13.0bb92ce8.js",
    "revision": "0a99d4bcb7d34910ae34d730d6d9dba5"
  },
  {
    "url": "assets/js/14.ca913b2d.js",
    "revision": "a9b593792b47fc637871ee12006ceadf"
  },
  {
    "url": "assets/js/15.caa9059b.js",
    "revision": "0a154761280f099a764c04e3f5156705"
  },
  {
    "url": "assets/js/16.77a43179.js",
    "revision": "979e6b62720d2bb1a0de329e336b195f"
  },
  {
    "url": "assets/js/17.250746f0.js",
    "revision": "1c191bed1a4b91641274278f61d11c84"
  },
  {
    "url": "assets/js/18.de2ce77a.js",
    "revision": "e44b8b50f27a8b47911bc6643d090b3c"
  },
  {
    "url": "assets/js/19.daaadeb6.js",
    "revision": "cca3bfddad326442fa8c62b34f82126e"
  },
  {
    "url": "assets/js/20.3e493a8d.js",
    "revision": "1174b878cf8f4203c98df2a06afbbcf1"
  },
  {
    "url": "assets/js/21.b1257a23.js",
    "revision": "d47213d7dec3d7163d20d0fc22049cec"
  },
  {
    "url": "assets/js/22.e8094df8.js",
    "revision": "4530c9044a45ecdf5e0af463a4c78f5a"
  },
  {
    "url": "assets/js/23.f1d378eb.js",
    "revision": "cdcb62efc665fe5ff8b74299055512dc"
  },
  {
    "url": "assets/js/24.529bf91a.js",
    "revision": "b8e10119eee1d375f344f31721dc2971"
  },
  {
    "url": "assets/js/25.29b67d3b.js",
    "revision": "3de93b217c0aac794a99e46600505653"
  },
  {
    "url": "assets/js/26.cdc48ad9.js",
    "revision": "c1f4b3426ff49cf65a03a421a1669070"
  },
  {
    "url": "assets/js/27.2d122fbd.js",
    "revision": "d4b47cd25633bdcb30d1db6e76178bcd"
  },
  {
    "url": "assets/js/28.27804323.js",
    "revision": "f64e0d4beff5e7d42cea07fde1a76ab8"
  },
  {
    "url": "assets/js/29.83a69cc0.js",
    "revision": "49833b2cb2c3ab62720e073eea6fe28e"
  },
  {
    "url": "assets/js/3.b316e861.js",
    "revision": "b5a5aafc9a12bbd66745ff6f77191cfd"
  },
  {
    "url": "assets/js/30.9a05e5f6.js",
    "revision": "9cb9cad030d2dcb78bfe571ce61b1a21"
  },
  {
    "url": "assets/js/31.6d01bf96.js",
    "revision": "acda7e1dea12d76e1ab7602e1acbcc2b"
  },
  {
    "url": "assets/js/32.fdcef6d6.js",
    "revision": "bb63ec213ba5d45d438e1055917b37f5"
  },
  {
    "url": "assets/js/4.335cf54b.js",
    "revision": "e3210b9fa6d87473b3030b735058e108"
  },
  {
    "url": "assets/js/5.155c6b16.js",
    "revision": "826aaa0eee8fae406e576631e54d56df"
  },
  {
    "url": "assets/js/6.f021cea4.js",
    "revision": "70d06f228785b6f95dadf3544526ea9f"
  },
  {
    "url": "assets/js/7.cd0b0220.js",
    "revision": "56437e57ab9961a17e1627de2bd9f545"
  },
  {
    "url": "assets/js/8.9c1b0eb8.js",
    "revision": "b4c96ccccf809c98bff335d788aaa26e"
  },
  {
    "url": "assets/js/9.35230b46.js",
    "revision": "ed71bebf6f152e3edae08161b82fe806"
  },
  {
    "url": "assets/js/app.978d6e83.js",
    "revision": "187101fdd8d3d42c8c6f4a9d68b71b12"
  },
  {
    "url": "assets/js/vendors~docsearch.a3c35701.js",
    "revision": "5d321dc41033da987689316aef193f9f"
  },
  {
    "url": "demo.html",
    "revision": "279bed7aafd0a0d0376eef0eb6c33c36"
  },
  {
    "url": "en/about.html",
    "revision": "7da7199314d75d5e2751f59d906a3919"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "1b1d35c0bc7b87f04fed8b049ecf9b6c"
  },
  {
    "url": "en/guide/config.html",
    "revision": "1f0b635fa7ebd490cfe0c2bc95526146"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "071ec2eec40a6c96336dcf8ad3d37491"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "6f8334d1d4951cac8f1bfd3239336ae6"
  },
  {
    "url": "en/guide/index.html",
    "revision": "e764132d208617b187aa1fc72c4e632b"
  },
  {
    "url": "en/guide/page.html",
    "revision": "b49d407e234f4f00105acce4d172f8d1"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "bb7578d1a674709276bc97e62294a9d4"
  },
  {
    "url": "en/index.html",
    "revision": "a145bd8a8219f6852cc6b2941a54a416"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "b4cfbb712e4ed319de630184ffd1c708"
  },
  {
    "url": "guide/config.html",
    "revision": "443b9d510de47c78f6930fdbe3f30451"
  },
  {
    "url": "guide/faq.html",
    "revision": "084c736c07011fb710ad19ce4359a059"
  },
  {
    "url": "guide/icon.html",
    "revision": "945715c105de5801761627c3ceef1f25"
  },
  {
    "url": "guide/index.html",
    "revision": "7c5e8a342e8de655eb622b725ec75cbd"
  },
  {
    "url": "guide/migrate.html",
    "revision": "64282670710b38882bd9c9eaf75d9462"
  },
  {
    "url": "guide/page.html",
    "revision": "e002316dabc17feb2f5ce124bdf98e9f"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "8d6a4a59884b63699a2013206c944294"
  },
  {
    "url": "index.html",
    "revision": "cb7952778e6ca736c43dbcc3afe3e826"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "yun.svg",
    "revision": "ebbd22f3cde555d95e5dec5d41ed8505"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
