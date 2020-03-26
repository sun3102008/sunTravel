<template>
  <div class="city-list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">
            当前城市
        </div>
            <div class="button-list">
              <div class="button-wrapper">
                <div class="button">{{city}}</div>
              </div>
           </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div 
            class="button-wrapper" 
            v-for="(item,id) in hotCities" :key="id"
          >
            <div class="button" @click="cityNameClick(item.name)">{{item.name}}</div>
          </div>
          
        </div>
      </div>
        <!-- key值是A,B,C,D... -->
      <div class="area" v-for="(item,key) of cities" :key="key" :ref='key'>
          <div class="title border-topbottom">{{key}}</div>
          <div class="item-list" v-for="i of item" :key="i.id">
            <div class="item border-bottom"
              @click='cityNameClick(i.name)'
            >{{i.name}}</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState,mapMutations } from 'vuex'

export default {
  name:'CityList',
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  computed: {
    ...mapState(['city'])
  },
  props:{
    hotCities:{
      type:Array,
      default () {
        return []
      }
    },
    cities:{
      type:Object,
      default () {
        return {}
      }
    },
    letter:{
      type:String,
      default:''
    }
  },
  methods: {
    ...mapMutations(['cityName']),
    cityNameClick (city) {
      // console.log(city)
      //向vuex 发送事件(actions)
      // this.$store.commit('cityName', city)
      this.cityName(city)
      this.$router.push('/home')
    }
  },
  //当letter发生改变时，点击字母 跳转到相应区域
  watch: {
    //监听 letter
    letter () {
      // console.log(this.letter)
      if (this.letter) {
        //1.字母页面中的字母(this.letter)  对应list中字母的区域(element)
        //注：使用循环获取的:ref，$refs获取到的是个 数组
        const element = this.$refs[this.letter][0]
        //2.使用bs 方法
        this.scroll.scrollToElement(element)
      }
    } 
  }
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