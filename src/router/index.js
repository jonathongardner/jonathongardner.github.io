import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Common/HomePage.vue'
import Resume from '@/views/Resume/ResumePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Common/AboutPage.vue')
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: () => import('@/views/Error/NotFoundPage.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'not-found' },
    }
  ],
})

export default router
