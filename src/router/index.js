import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Common/HomePage.vue'
import Resume from '@/views/Resume/ResumePage.vue'

Vue.use(VueRouter)

const routes = [
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
    path: '*',
    redirect: 'not-found',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
