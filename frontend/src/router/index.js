import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use( VueRouter )

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/compte',
    name: 'compteview',
    component: () => import(/* webpackChunkName: "about" */ '../views/compte.vue' )
  },
  {
    path: '/transition',
    name: 'trantview',
    component: () => import(/* webpackChunkName: "about" */ '../views/transition.vue' )
  },

  {
    path: '/',
    name: 'log',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue' )
  },
  {
    path: '/payment',
    name: 'payview',
    component: () => import(/* webpackChunkName: "about" */ '../views/payment.vue' )
  }

]

const router = new VueRouter( {
  mode: 'history',
  base: process.env.BASE_URL,
  routes
} )

export default router
