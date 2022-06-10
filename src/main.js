import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import VueScrollTo from 'vue-scrollto'
import './assets/fonts.css'

const app = createApp(App)

app
   .use(store)
   .use(VueScrollTo)
   .mount('#content')
