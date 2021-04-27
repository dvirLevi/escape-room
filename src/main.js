import {
    createApp
} from 'vue'
import VueGtag from "vue-gtag-next";
import App from './App.vue'
import router from './router'
import store from './store'
import "./style/global.css"
import "./style/main.css"
import roomSlots from '@/components/roomSlots.vue'
import './registerServiceWorker'

const app = createApp(App);

app.component('roomSlots', roomSlots);

app.use(VueGtag, {
    property: {
        id: "G-73VKYBNZY2"
    }
});


app.use(store).use(router).mount('#app');