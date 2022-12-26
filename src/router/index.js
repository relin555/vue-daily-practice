import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage'
import UserPage from '@/views/UserPage'
import GamePage from '@/views/GamePage'
import CardHolder from '@/views/CardHolder.vue'
const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/user',
    component: UserPage
  },
  {
    path: '/game',
    component: GamePage
  },
  {
    path: '/cardHolder',
    component: CardHolder
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
