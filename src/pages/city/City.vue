<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities='cities' :hot-cities='hotCities'></city-list>
    <city-alphabet :cities='cities'></city-alphabet>
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
      cities:{}
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
      }
  },
  mounted() {
    this.getCityInfo()
  },
}
</script>
<style lang="stylus" scoped>
  
</style>