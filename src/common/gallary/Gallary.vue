<template>
  <div class="gallary" @click="gallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption" >
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <img class="gallary-img" 
            :src="item" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name:'Gallary',
  data (){
    return{
      swiperOption :{
        //轮播图下面的滑动小点
        pagination:'.swiper-pagination',
        //将小圆点改为  分式
        paginationType : 'fraction',
        //让插件支持循环轮播
        loop: true,
   //将observe应用于Swiper的父元素。当Swiper的父元素变化时,Swiper更新。
        observeParents:true,
        //启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
// 默认false，不开启，可以使用update()方法更新。
        observer:true
      }
    }
  },
  props: {
    imgs: {
      type:Array,
      default () {
        return []
      }
    }
  },
  methods: {
    gallaryClick () {
      this.$emit('gallaryClick')
    }
  }
}
</script>

<style lang="stylus" scoped>
  // swiper-container 自带overflow:hidden
  .gallary >>> .swiper-container
    overflow:inherit
  .gallary
    position:fixed
    right:0
    left:0
    top:0
    bottom:0
    background-color:#000
    z-index:99
    //垂直方向居中
    display:flex
    flex-direction:column
    justify-content:center
    .wrapper
      width:100%
      .gallary-img
        width:100%
    .swiper-pagination
      color:#fff
      bottom: -0.6rem

</style>