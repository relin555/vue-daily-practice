import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage'
import UserPage from '@/views/UserPage'
const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/user',
    component: UserPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
