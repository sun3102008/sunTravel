<template>
  <div class="detail-header">
    <div class="back-arrow" @click="backArrow" v-show="isShow">
      <div class="iconfont back-iconfont" >&#xe60d;</div>
    </div>
    <div 
        class="right-content" v-show="!isShow"
        :style='opacityStyle'
    >
      <div class="iconfont header-fixed-back" @click="backArrow">&#xe60d;</div>
      景点详情
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name:'DetailHeader',
  data () {
    return {
      //景点详情跟圆圈返回 逻辑相反
      isShow:true,
      opacityStyle:{
        opacity:0
      }
    }
  },
  methods: {
    backArrow () {
      this.$router.push('/home')
    },
    //当用户往下滑到一定距离，显示景点详情
    handleScroll () {
      //获取当前页面的滚动条纵坐标位置(无单位)
      console.log(document.documentElement.scrollTop)
      const top = document.documentElement.scrollTop
      if (top >60) {
        let opacity = top /140
        // if (opacity > 1){return 1}
        this.opacityStyle = { opacity:opacity }
        this.isShow = false
      }else {
        this.isShow = true
      }
}
  },
  activated() {
    window.addEventListener('scroll',this.handleScroll)
  },
  deactivated() {
    //离开页面，销毁全局事件
    window.removeEventListener('scroll',this.handleScroll)
  },
}
</script>

<style lang="stylus" scoped>
  @import '~assets/css/varibles.styl'
    .back-arrow
      position:absolute
      left:.2rem
      top:.2rem
      width:.8rem
      height:.8rem
      line-height:.8rem
      border-radius:.4rem
      background-color:rgba(0,0,0,.8)
      .back-iconfont
        color:#fff
        font-size:.4rem
        text-align:center
    .right-content 
      position:fixed
      top:0
      right:0
      left:0  
      height:1rem
      line-height:1rem
      z-index:100
      color:#fff
      height:$headerHeight 
      text-align:center 
      font-size:.32rem
      background-color:$bgColor
      .header-fixed-back
        position:absolute
        top:0
        left:0
        width:.64rem
        text-align :center
        font-size :.4rem
        color:#fff     
</style>