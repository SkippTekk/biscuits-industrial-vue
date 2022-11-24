import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Ships from '@/views/Ships.vue'
import ShipsData from '@/templates/ShipsData.vue'
import Api from '@/views/Api.vue'
import PageNotFound from '@/content/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/ships',
    name:'ships',
    component: Ships
  },
  {
    path: '/api',
    name: 'api',
    component: Api
  },
  {
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
