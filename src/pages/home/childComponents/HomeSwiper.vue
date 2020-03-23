<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
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
      },
      swiperList:[{
            id:'0001',
            imgUrl :'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/bc4504a3671b72e19939177e1767a422.jpg_750x200_277b415c.jpg'
        },{
            id:'0002',
            imgUrl :'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/6875979c607515c27de528361ab1e55e.jpg_750x200_9db3d155.jpg'
        },{
            id :'0003',
            imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/2bf6cffe02525445c215e45ea128162b.jpg_750x200_32f01903.jpg'
        }]
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