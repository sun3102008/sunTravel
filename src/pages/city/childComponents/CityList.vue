<template>
  <div class="city-list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'


export default {
  name:'CityList',
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
}
</script>

<style lang="stylus" scoped>
  @import '~assets/css/varibles.styl'
  .border-topbottom
    &:before
      border-color:#ccc
    &:after
      border-color:#ccc
  .city-list
      position:absolute
      top:1.58rem
      right:0
      bottom:0
      left:0
      overflow:hidden
      .title
        background:#eee
        padding-left:.2rem
        line-height:.44rem
        color:#666
        padding-left:.2rem
        font-size:.26rem
      .button-list
        // 清除子元素的浮动
        overflow:hidden
        // 给右侧留出.6rem 的距离
        padding: .1rem .6rem .1rem .1rem
        .button-wrapper
          float:left
          width:33.33%
          .button
            text-align:center
            margin: .1rem
            border:.02rem solid #ccc
            borer-radius:.06rem
            padding: .1rem 0
            color:$bgColor
      .item-list
        .item
          line-height:.76rem 
          color:#666
          padding-left:.2rem
</style>