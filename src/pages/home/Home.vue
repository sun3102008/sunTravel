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

import axios from 'axios'

export default {
  name:'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  methods:{
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      console.log(res)
    }
    
  },
  mounted() {
    this.getHomeInfo()
  },
}
</script>
<style lang="">
  
</style>