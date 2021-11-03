import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import './assets/all.scss'

// Vue.use(VueAxios, axios)
// Vue.component('Landing', Landing)


createApp(App).use(router).mount('#app')


  