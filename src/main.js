import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import VueScrollTo from 'vue-scrollto'
import components from "@/components/UI"
import './assets/fonts.css'

const app = createApp(App)

components.forEach(component => {
   app.component(component.name, component)
});

app
   .use(store)
   .use(VueScrollTo)
   .mount('#content')
