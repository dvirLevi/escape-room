import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./style/global.css"
import "./style/main.css"
import roomSlots from '@/components/roomSlots.vue'

const app = createApp(App);

app.component('roomSlots', roomSlots);

app.use(store).use(router).mount('#app');
