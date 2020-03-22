import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入重置样式
import 'assets/css/reset.css'
//移动端1像素边框
import 'assets/css/border.css'

//引入iconfont
import 'assets/css/iconfont.css'

//1.引入fastClick,解决移动端点击300毫秒延迟
import fastClick from 'fastclick'
//2.使用fastClick
fastClick.attach(document.body)

//使用轮播(1)
import VueAwesomeSwiper from 'vue-awesome-swiper'
//使用插件(2)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
