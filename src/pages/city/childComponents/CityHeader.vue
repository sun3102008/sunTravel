<template>
  <div class="city-header">
    <router-link to="/home">
      <span class="iconfont left-icon">&#xe60d;</span>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name:'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~assets/css/varibles.styl'
  .city-header
    height:.86rem
    line-height:.86rem
    text-align :center
    color:#fff
    overflow:hidden
    font-size:.32rem
    background-color:$bgColor
    overflow:hidden
    .left-icon
      font-size:.4rem
      float:left
      margin-left:.1rem
      color:#fff
</style>