<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from './childComponents/HomeHeader'
import HomeSwiper from './childComponents/HomeSwiper'
import HomeIcons from './childComponents/HomeIcons'

export default {
  name:'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>
<style lang="">
  
</style>