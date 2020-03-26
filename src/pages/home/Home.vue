<template>
  <div>
    <home-header ></home-header>
    <home-swiper :swiper-list='swiperList'></home-swiper>
    <home-icons :icon-list='iconList'></home-icons>
    <home-recommend :recommend-list='recommendList'></home-recommend>
    <home-weekend :weekend-list='weekendList'></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './childComponents/HomeHeader'
import HomeSwiper from './childComponents/HomeSwiper'
import HomeIcons from './childComponents/HomeIcons'
import HomeRecommend from './childComponents/HomeRecommend'
import HomeWeekend from './childComponents/HomeWeekend'

import { mapState } from 'vuex'

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
      activeCity:'',//保存城市id
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  methods: {
    getHomeInfo (){
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      //先判断是否拿到数据
      const resData = res.data
      if(resData.ret && resData.data){
        this.swiperList = resData.data.swiperList
        this.iconList = resData.data.iconList
        this.recommendList = resData.data.recommendList
        this.weekendList = resData.data.weekendList
      }
      console.log(res)
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted() {
    this.getHomeInfo()
    //console.log(this.city) 获取当前状态的城市名
    this.activeCity = this.city
  },
  activated() {
    //进入home页面,根据城市名 渲染对应城市内容
    if (this.activeCity !== this.city) {
      //1.城市名不等，发送axios请求，并保存新城市名
      this.activeCity = this.city
      this.getHomeInfo()
    }
  },
}
</script>
<style lang="">
  
</style>