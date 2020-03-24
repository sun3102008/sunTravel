<template>
  <div>
    <city-header></city-header>
  </div>
</template>

<script>
import CityHeader from './childComponents/CityHeader'
//点击'北京' 进入城市页
export default {
  name:'List',
  components:{
    CityHeader
  }
}
</script>
<style lang="stylus" scoped>
  
</style>