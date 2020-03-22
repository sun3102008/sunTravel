import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from 'pages/home/Home'
import List from 'pages/list/List'

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
    path:'/list',
    component:List
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
