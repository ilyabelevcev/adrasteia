import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Services from '../pages/Services.vue'
import Working from '../pages/Working.vue'
import Clients from '../pages/Clients.vue'
import Contacts from '../pages/Contacts.vue'

const routes = [
   {
      path: '/',
      name: 'home',
      component: Home
   },
   {
      path: '/about',
      name: 'About',
      component: About
   },
   {
      path: '/services',
      name: 'Services',
      component: Services
   },
   {
      path: '/working',
      name: 'Working',
      component: Working
   },
   {
      path: '/clients',
      name: 'Clients',
      component: Clients
   },
   {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
   },
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes
})

export default router
