import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from 'pages/home/Home'
import City from 'pages/city/City'
import Detail from 'pages/detail/Detail'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
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
  routes,
  //vue router 滚动行为
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return {x:0,y:0}
  }
})


export default router
