<template>
  <div class="icons">
    <swiper>
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
  data (){
    return {
       iconList :
          [{
            id:'0001',
            imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            desc:'景点门票'
            },{
                id:'0002',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/4d/a1eda1a2b8414302.png',
                desc:'暑期夜场夜场夜场夜场夜场夜场112'
            },{
                id:'0003',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/4d/a1eda1a2b8414302.png',
                desc:'暑期夜场'
            },{
                id:'0004',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/4d/a1eda1a2b8414302.png',
                desc:'暑期夜场'
            },{
                id:'0005',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/4d/a1eda1a2b8414302.png',
                desc:'暑期夜场'
            },{
                id:'0006',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/4d/a1eda1a2b8414302.png',
                desc:'暑期夜场'
            },{
                id:'0007',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/4d/a1eda1a2b8414302.png',
                desc:'暑期夜场'
            },{
                id:'0009',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/4d/a1eda1a2b8414302.png',
                desc:'暑期夜场'
            },
            {
                id:'0008',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/4d/a1eda1a2b8414302.png',
                desc:'暑期夜场'
            }
            ]
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
  }
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