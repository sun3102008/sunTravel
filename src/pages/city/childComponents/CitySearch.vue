<template>
  <div class="city-search">
    <input class='search-input'
      type="text" placeholder="输入城市或拼音"
    >
  </div>
</template>

<script>
export default {
  name:'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import '~assets/css/varibles.styl'
  .city-search
    height 0.72rem
    padding:0 .1rem
    background:$bgColor
    .search-input
      width:100%
      height:.62rem
      text-align:center
      border-radius:.06rem
      color:#666

</style>