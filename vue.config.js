// Inside vue.config.js
module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
        name: "חדר בריחה",
        themeColor: '#d80806',
        msTileColor: '#d80806',
        // appleMobileWebAppCapable: 'no',
        // appleMobileWebAppStatusBarStyle: 'default',
        // manifestPath: 'manifest.json',
        // workboxPluginMode: 'InjectManifest',
        // assetsVersion: "v2",
        workboxOptions: {
            // ...other Workbox options...
            skipWaiting: true,
            clientsClaim: true,
            exclude: [/_redirects/],
        }
    }
}