import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styles/reset.css'
import '@/assets/styles/border.css'
import fastClick from 'fastclick'
fastClick.attach(document.body)

createApp(App).use(router).mount('#app')
