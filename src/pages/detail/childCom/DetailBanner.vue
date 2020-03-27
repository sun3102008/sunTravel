<template>
  <div>
    <div class="detail-banner" @click="bannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" />
      <div class="banner-info">
        <div class="banner-title">
          大连圣亚海洋世界(AAAA景区)
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe634;</span>
          39 
        </div>
      </div>
    </div>
    <!-- 画廊 ,点击图片展示画廊-->
    <gallary :imgs='imgs' @gallaryClick='gallaryClick' v-show="showGallary"></gallary>
  </div> 
</template>

<script>
import Gallary from 'common/gallary/Gallary'

export default {
  name:'DetailBanner',
  components:{
    Gallary
  },
  data () {
    return {
      showGallary:false,
      imgs:['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg']
    }
  },
  methods: {
    bannerClick () {
      this.showGallary = true
    },
    gallaryClick () {
      this.showGallary = false
    }
  },
}
</script>

<style lang="stylus" scoped>
  .detail-banner
    height:0
    padding-bottom:55%
    overflow:hidden
    position:relative
    .banner-img 
      width:100%
    .banner-info
      position:absolute
      left:0
      right:0
      bottom:0
      z-index:24
      line-height:.4rem
      color:#fff
      display:flex
      //渐变效果  原来是linear-gradient(top,rgba(),rgba())已过时；注:原来的top 应改为to bottom
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex:1
        padding:0 .2rem
      .banner-number
        height:.4rem
        line-height:.4rem
        padding:0 .1rem
        border-radius:.2rem
        padding:0 .4rem
        font-size:.24rem
        background: rgba(0,0,0,.7)
        .banner-icon
          font-size:.24rem
        
</style>