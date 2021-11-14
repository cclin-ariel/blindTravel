import { createRouter, createWebHashHistory } from 'vue-router'
import Landing from '@/components/Landing.vue'
import SearchResult from '@/components/SearchResult.vue'
import SearchResultFeelingLucky from '@/components/SearchResultFeelingLucky.vue'
import Detail from '@/components/Detail.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/searchResult',
    name: 'SearchResult',
    component: SearchResult
  },
  {
    path: '/searchResultFeelingLucky',
    name: 'SearchResultFeelingLucky',
    component: SearchResultFeelingLucky
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
