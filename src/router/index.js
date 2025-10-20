import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Privacy from '../views/Privacy.vue'
import Terms from '../views/Terms.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy,
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
