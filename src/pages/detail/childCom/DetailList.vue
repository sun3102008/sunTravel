<template>
  <div >
    <div class="item" v-for="(item,index) in list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
        <!-- 二级内容 -->
        <!-- <div 
          class="item-children" v-for='(i,indey) in item.listChildren' :key="indey"
        >
          {{i.title}}
        </div> -->
      </div>
                <!-- 使用递归组件 -->
      <div v-if="item.children" class="item-children">
        <detail-list :list='item.children'></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //name 递归的时候用
  name:'DetailList',
  props:{
    list:{
      type:Array,
      defaut () {
        return []
      }
    }
  },

}
</script>

<style lang="stylus" scoped>
  .item-title
    line-height:.8rem
    font-size:.32rem
    padding:0 .2rem
    .item-title-icon
      position: relative
      left: .06rem
      top: .06rem
      display: inline-block
      width: .36rem
      height: .36rem
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -0.45rem no-repeat
      margin-right: .1rem
      background-size: .4rem 3rem
  .item-children  
    padding:0 .2rem
</style>