<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <router-view></router-view>
  </div>
</template>

<script>
import HomeHeader from './childComponents/HomeHeader'
import HomeSwiper from './childComponents/HomeSwiper'

export default {
  name:'Home',
  components:{
    HomeHeader,
    HomeSwiper
  }
}
</script>
<style lang="">
  
</style>