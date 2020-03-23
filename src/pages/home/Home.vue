<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './childComponents/HomeHeader'
import HomeSwiper from './childComponents/HomeSwiper'
import HomeIcons from './childComponents/HomeIcons'
import HomeRecommend from './childComponents/HomeRecommend'
import HomeWeekend from './childComponents/HomeWeekend'

export default {
  name:'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>
<style lang="">
  
</style>