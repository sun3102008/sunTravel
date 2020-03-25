<template>
  <ul class="alphabet">
    <li class="item"
        v-for="(item,index) of cities" :key="index"
    >
      {{index}}
    </li>
  </ul>
</template>

<script>
export default {
  name:'CityAlphabet',
  props:{
    cities:{
      type:Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~assets/css/varibles.styl'
  .alphabet
    position:absolute
    right:0
    top:1.58rem
    bottom:0
    width:.4rem
    //垂直方向居中
    display:flex
    flex-direction:column
    justify-content:center
    align-items:center
    color:$bgColor
    padding-right:.2rem
    line-height:.44rem
        
</style>