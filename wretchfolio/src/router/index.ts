import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectView.vue'),
    },

    {
      path: '/blogs',
      name: 'blogs',
      component: () => import('../views/BlogView.vue'),
    },

    {
      path: '/ramble',
      name: 'ramble',
      component: () => import('../views/RambleView.vue'),
    },

    {
      path: '/bits',
      name: 'bits',
      component: () => import('../views/BitsView.vue'),
    },
    {
      path: '/projects/:slug',
      name: 'project',
      component: () => import('../views/ProjectDetailedView.vue'),
    },
  ],
})

export default router
