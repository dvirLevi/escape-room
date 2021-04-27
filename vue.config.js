// Inside vue.config.js
module.exports = {
    // ...other vue-cli plugin options...
    // pwa: {
    //     name: "חדר בריחה | מרכז מורשת הרמב''ם ועדות ישראל",
    //     themeColor: '#d80806',
    //     msTileColor: '#d80806',
    //     // workboxOptions: {
    //     //     skipWaiting: true
    //     // }
    // }
    pwa: {
        name: 'BDFI',
        themeColor: '#2d3748',
        msTileColor: '#2d3748',
        appleMobileWebAppCapable: 'no',
        appleMobileWebAppStatusBarStyle: 'default',
        manifestPath: 'manifest.json',
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: 'src/registerServiceWorker.js',
            // ...other Workbox options...
            exclude: [/_redirects/],
        }
    }
}