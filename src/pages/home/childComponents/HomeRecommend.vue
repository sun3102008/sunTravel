<template>
  <div>
    <div class="home-recommend">热销推荐</div>
    <div class="item border-bottom" v-for="(item,index) in recommandList" 
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
  data () {
    return {
      recommandList :[{
          id:'0001',
          imgUrl:'http://img1.qunarzz.com/sight/p0/201301/16/ae96ce4058bd5cf093835fbb.jpg_200x200_e4cb9743.jpg',
          title :'青城道温泉1',
          desc:'温泉好去处好去好去fdfdfsdfdsfdfdsf好去好去好去好去好去'
        },
        {
          id:'0002',
          imgUrl:'http://img1.qunarzz.com/sight/p0/201301/16/ae96ce4058bd5cf093835fbb.jpg_200x200_e4cb9743.jpg',
          title :'青城道温泉2',
          desc:'温泉好去处'
        },{
          id:'0003',
          imgUrl:'http://img1.qunarzz.com/sight/p0/201301/16/ae96ce4058bd5cf093835fbb.jpg_200x200_e4cb9743.jpg',
          title :'青城道温泉3',
          desc:'温泉好去处'
        },{
          id:'0004',
          imgUrl:'http://img1.qunarzz.com/sight/p0/201301/16/ae96ce4058bd5cf093835fbb.jpg_200x200_e4cb9743.jpg',
          title :'青城道温泉4',
          desc:'温泉好去处'
      }]
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