import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewYear from '../views/NewYear.vue'
import PastYear from '../views/PastYear.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/2025',
      name: '2025',
      component: NewYear,
    },
    {
      path: '/2024',
      name: '2024',
      component: PastYear,
    },
  ],
})

export default router
