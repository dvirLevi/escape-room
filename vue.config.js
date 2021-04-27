// Inside vue.config.js
module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
        name: "חדר בריחה | מרכז מורשת הרמב''ם ועדות ישראל",
        themeColor: '#d80806',
        msTileColor: '#d80806',
        workboxOptions: {
            skipWaiting: true
        }
    }
}