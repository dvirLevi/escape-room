// Inside vue.config.js
module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
        name: "חדר בריחה",
        themeColor: '#000',
        msTileColor: '#000',
        // appleMobileWebAppCapable: 'no',
        // appleMobileWebAppStatusBarStyle: 'default',
        // manifestPath: 'manifest.json',
        // workboxPluginMode: 'InjectManifest',
        assetsVersion: "v2",
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            // swSrc: 'src/registerServiceWorker.js',
            // ...other Workbox options...
            skipWaiting: true,
            exclude: [/_redirects/],
        }
    }
}