
var STATIC_CACHE = 'newsfeeder-static-cache-v4';

// listen for outgoing network request
self.addEventListener('fetch', function (event) {
    // try to find response object in the cache
    // associated with current request
    event.respondWith(
        caches.open(STATIC_CACHE).then(function (cache) {
            return cache.match(event.request).then(function (response) {
                if (response) return response;

                return fetch(event.request).then(function (networkResponse) {
                    return networkResponse;
                });
            });
        })
    );
});
self.addEventListener('activate', function (event) {
    console.log('service worker activate');
    var cacheWhitelist = [STATIC_CACHE];

    event.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if (cacheWhitelist.indexOf(key) === -1) {
                    return caches.delete(key);
                }
            }));
        })
    );
});
self.addEventListener('install', function (event) {
    event.waitUntil(caches.open(STATIC_CACHE).then(function (cache) {
        return cache.addAll([
            "./",
            "css/style.min.css",
            "js/app.min.js",
            "cordova.js",
            "css/font_awesome/css/font-awesome.min.css",
            "css/ionicons/css/ionicons.min.css",
            "css/material-design-iconic-font/css/material-design-iconic-font.min.css",
            "cordova_plugins.js",
            "plugins/cordova-plugin-device/www/device.js",
            "plugins/cordova-plugin-dialogs/www/notification.js",
            "plugins/cordova-plugin-admobpro/www/AdMob.js",
            "plugins/cordova-plugin-headercolor/www/HeaderColor.js",
            "plugins/cordova-plugin-statusbar/www/statusbar.js",
            "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
            "css/material-design-iconic-font/fonts/Material-Design-Iconic-Font.woff2",
            "css/ionicons/fonts/ionicons.ttf",
            "https://cdn.polyfill.io/v2/polyfill.min.js",
            "views/splitter.html",
            "images/logo.png",
            "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
            "plugins/cordova-plugin-dialogs/www/browser/notification.js",
            "plugins/cordova-plugin-statusbar/src/browser/StatusBarProxy.js",
            "views/news.html",
            "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
            "views/recommended.html",
            "config.xml",
            "manifest.json",
            "js/browser.js",
            "images/iconnotfound.png",
            "views/about.html",
            "views/feeds.html",
            "views/add-feed.html",
            "views/specific-feed.html",
            "views/specific-news-item.html",
            "images/menu.png",
            "images/recommended.png",
            "images/recommended-2.png",
            "images/news-feed-initial.png",
            "images/news-feed-loading.png",
            "images/news-feed.png",
            "images/news-search.png",
            "images/search-feed.png",
            "images/add-feed-loading.png",
            "images/add-feed.png",
            "images/news-feed-added-item.png",
            "images/feeds.png"
        ]);
    }));
});
