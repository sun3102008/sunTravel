<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="swiperList.length">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name:'HomeSwiper',
  data (){
    return{
      swiperOption :{
        //轮播图下面的滑动小点
        pagination:'.swiper-pagination',
        //让插件支持循环轮播
        loop: true
      }
    }
  },
  props:{
    swiperList:{
      type:Array,
      default () {
        return []
      }
    }
  }

}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow:hidden
    width:100%
    height:0
    padding-bottom:31.25%
    background:#eee
    .swiper-img
      width:100%
</style>