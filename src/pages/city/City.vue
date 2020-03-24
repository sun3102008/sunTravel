<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './childComponents/CityHeader'
import CitySearch from './childComponents/CitySearch'
import CityList from './childComponents/CityList'
import CityAlphabet from './childComponents/CityAlphabet'
//点击'北京' 进入城市页
export default {
  name:'List',
  components:{
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
}
</script>
<style lang="stylus" scoped>
  
</style>