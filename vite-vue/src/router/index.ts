import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '/@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      keepalive:true
    }
  },
  {
    path: '/search',
    name: 'search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "search" */ '/@/views/Search.vue'),
    meta: {
      keepalive:true
    }
  },
  {
    path: '/itemmusic',
    name: 'itemmusic',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ItemMusic" */ '/@/views/ItemMusic.vue'),
    meta: {
      keepalive:true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
