<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont left-icon">&#xe60d;</span>
    </div>
    <div class="header-center">
      <span class="iconfont center-icon">&#xe64f;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
      <div class="header-right">
         城市
      <span class="iconfont right-icon">&#xe610;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name:'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~assets/css/varibles.styl'
  // 1rem = html font-size = 50px
  .header
    line-height:.86rem
    background-color:$bgColor
    color:#fff
    display:flex
    .header-left
      width:.64rem
      float:left
      .left-icon
        text-align:center
        font-size:.4rem
        margin-left:.1rem
    .header-center
      flex:1
      color:#ccc
      line-height:.64rem
      border-radius:.1rem
      background:#fff
      height:.64rem
      margin:.12rem .12rem .12rem .12rem
      .center-icon
        margin-left:.1rem
    .header-right
      color:#fff
      width:1.24rem
      float:right
      text-align:center
      .right-icon
        font-size:.24rem

</style>