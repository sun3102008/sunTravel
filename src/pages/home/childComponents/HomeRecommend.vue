<template>
  <div>
    <div class="home-recommend">热销推荐</div>
    <div class="item border-bottom" v-for="(item,index) in recommendList" 
      :key="index"
    >
      <div class="item-img">
        <img :src="item.imgUrl">
      </div>
      <div class="item-content" >
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'HomeRecommend',
  props:{
    recommendList:{
      type:Array,
<<<<<<< HEAD
      default (){
=======
      default () {
>>>>>>> origin/city-router
        return []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~assets/css/mixins.styl' 
  .home-recommend
    background-color:#eee
    text-indent:0.2rem
    margin-top:.2rem
    line-height:.8rem
  .item
    height:1.9rem
    overflow:hidden
    display: flex
    .item-img>img
      width: 1.7rem
      height: 1.7rem
      padding:.1rem
    .item-content
      flex:1
      padding:.1rem
      min-width:0
      .item-title
        line-height:.54rem
        font-size:.32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>