<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list 
      :cities='cities' :hot-cities='hotCities'
      :letter='letter'
    ></city-list>
    <city-alphabet :cities='cities' @letterClick='letterClick'></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'

import CityHeader from './childComponents/CityHeader'
import CitySearch from './childComponents/CitySearch'
import CityList from './childComponents/CityList'
import CityAlphabet from './childComponents/CityAlphabet'
//点击'北京' 进入城市页
export default {
  name:'List',
  data (){
    return {
      hotCities:[],
      cities:{},
      letter:''
    }
  },
  components:{
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    getCityInfo () {
        axios.get('/api/city.json').
          then(res =>{
            console.log(res)
            //获取数据先 判断
            if (res.data.ret && res.data.data){
              this.hotCities = res.data.data.hotCities
              this.cities = res.data.data.cities
            }
            // console.log(this.hotCities)
          })
      },
      //接收子组件(字母表)的点击事件，并将其传递给list页面
    letterClick (sun) {
      // console.log(sun)
      this.letter = sun //接收到字母页面的数据 传递给list页面
    }
  },
  mounted() {
    this.getCityInfo()
  },
}
</script>
<style lang="stylus" scoped>
  
</style>