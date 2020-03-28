<template>
  <div>
    <div class="detail-banner" @click="bannerClick">
      <img class="banner-img" :src='bannerImg' />
      <div class="banner-info">
        <div class="banner-title">
          {{sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe634;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <!-- 画廊 ,点击图片展示画廊-->
    <fade>
      <gallary :imgs='gallaryImgs' @gallaryClick='gallaryClick' v-show="showGallary"></gallary>
    </fade>
  </div> 
</template>

<script>
import Gallary from 'common/gallary/Gallary'
import Fade from 'common/fade/Fade'

export default {
  name:'DetailBanner',
  components:{
    Gallary,
    Fade
  },
  data () {
    return {
      showGallary:false,
    }
  },
  props:{
    sightName:{
      type:String,
      default:''
    },
    bannerImg:{
      type:String,
      default:''
    },
    gallaryImgs:{
      type:Array,
      default () {
        return []
      }
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