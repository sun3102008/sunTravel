<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" >
          </div>
          <p class="icon-text">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name:'HomeIcons',
  props:{
    iconList:{
      type:Array,
      default (){
        return []
      }
    }
  },
  data () {
    return {
<<<<<<< HEAD
      //swiperOption是个对象
      swiperOption:{
        //停止自动播放
        autoplay:false
=======
    }
  },
  props:{
    iconList:{
      type:Array,
      defaut () {
        return []
>>>>>>> origin/city-router
      }
    }
  },
  computed: {
    //把一维数组，拆分为2维数组；页面和数据项关联
    pages () {
      const pages =[]
        //遍历的是数组中的对象,(对象，索引)
      this.iconList.forEach((item,index) =>{
        //1.计算索引,索引0~7=》iconIndex值为0，赋值[]
        const iconIndex = Math.floor(index /8)
        if (!pages[iconIndex]){
           pages[iconIndex] = []
          //  console.log( pages[iconIndex],'111')
        }
        pages[iconIndex].push(item)
        // console.log( pages[iconIndex],'2222')
      })
      return pages
    }
<<<<<<< HEAD
  }
=======
  },
  mounted() {
    // console.log(this.pages)
  },
>>>>>>> origin/city-router
}
</script>

<style lang="stylus" scoped>
@import '~assets/css/varibles.styl'
@import '~assets/css/mixins.styl'
  .icons
    overflow:hidden
    // width:100% div 自带width:100%
    height:0
    padding-bottom:50%
    // background-color:green
    .icon
      width:25%
      height:0
      float:left
      overflow:hidden
      padding-bottom:25%
      position:relative
      .icon-img
        position:absolute
        top:0
        left:0
        right:0
        bottom:.44rem
        box-sizing:border-box
        padding:.1rem
        //图片
        .icon-img-content
          height:100%
          display:block
          margin:0 auto
      .icon-text
        position:absolute
        left:0
        right:0
        bottom:0
        text-align:center
        color:$darkTextColor
        ellipsis()
</style>