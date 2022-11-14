import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Ships from '@/templates/Ships.vue'
import ShipsData from '@/templates/ShipsData.vue'

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
    path: '/ships/:id',
    name:'ship',
    component: ShipsData
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
