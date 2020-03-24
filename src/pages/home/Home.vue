<template>
  <div>
    <home-header :city='city'></home-header>
<<<<<<< HEAD
    <home-swiper :swiperList='swiperList'></home-swiper>
    <home-icons :iconList='iconList'></home-icons>
    <home-recommend :recommendList='recommendList'></home-recommend>
    <home-weekend :weekendList='weekendList'></home-weekend>
=======
    <home-swiper :swiper-list='swiperList'></home-swiper>
    <home-icons :icon-list='iconList'></home-icons>
    <home-recommend :recommend-list='recommendList'></home-recommend>
    <home-weekend :weekend-list='weekendList'></home-weekend>
>>>>>>> origin/city-router
  </div>
</template>

<script>
import HomeHeader from './childComponents/HomeHeader'
import HomeSwiper from './childComponents/HomeSwiper'
import HomeIcons from './childComponents/HomeIcons'
import HomeRecommend from './childComponents/HomeRecommend'
import HomeWeekend from './childComponents/HomeWeekend'

//引入axios
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
  data () {
    return {
      city:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  methods: {
    getHomeInfo (){
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      //先判断是否拿到数据
      const resData = res.data
      if(resData.ret && resData.data){
        this.city =  resData.data.city
        this.swiperList = resData.data.swiperList
        this.iconList = resData.data.iconList
        this.recommendList = resData.data.recommendList
        this.weekendList = resData.data.weekendList
      }
<<<<<<< HEAD
      // console.log(res)
=======
      console.log(res)
>>>>>>> origin/city-router
    }
  },
  mounted() {
    this.getHomeInfo()
  }
}
</script>
<style lang="">
  
</style>