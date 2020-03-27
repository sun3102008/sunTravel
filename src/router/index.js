import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from 'pages/home/Home'
import City from 'pages/city/City'
import Detail from 'pages/detail/Detail'

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect: '/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/city',
    component:City
  },
  {
    path:'/detail',
    component:Detail
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
