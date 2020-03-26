<template>
  <div>
    <!-- 数据为cities(obj) -->
    <div class="city-search">
      <input class='search-input'
        type="text" placeholder="输入城市或拼音"
        v-model="keyword"
      >
    </div>
    <!-- 搜索的内容显示地方；输入有值时 显示输入框 -->
    <div class="search-content" ref='search'
      v-show='keyword'
    >
      <ul>
        <li 
            v-for="item of list" :key="item.id"
            class="search-item border-bottom"
            @click='cityNameClick(item.name)'
        >{{item.name}}</li>
        <!-- 当用户输入过多，友好提示没有匹配项 -->
        <li 
          class="search-item border-bottom"
          v-show='hasList'
        >
          请输入正确的城市
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'


export default {
  name:'CitySearch',
  data () {
    return {
      keyword:'',
      list:[],
      timer:null
    }
  },
  methods: {
    ...mapMutations(['cityName']),
    cityNameClick (city) {
      // this.$store.commit('cityName',city)
      this.cityName(city)
      //点击城市,跳转到首页
      this.$router.push('/home')
    }
  },
  props:{
    cities:{
      type:Object,
      default () {
        return {}
      }
    }
  },
  mounted() {
    this.scroll =  new BScroll(this.$refs.search)
  },
  computed: {
    //请输入正确的城市
    hasList () {
      //没输入内容时，显示请输入正确城市
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      //节流
      if (this.timer) {
        clearTimeout(this.timer)
      }
      //1.如果输入(keyword)为空，值(list)为空
      if (!this.keyword) {
        this.list = []
        return
      }
      //2.
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          //循环cities里的数组
          this.cities[i].forEach((value) => {
            //value: {id:xxx,spell:'xxx',name:'xxx'}
            if (value.spell.indexOf(this.keyword) != -1 || 
                value.name.indexOf(this.keyword) != -1){
                  result.push(value)
            }
          })
          this.list = result
        }
      }, 100);
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/css/varibles.styl'
  .city-search
    height 0.72rem
    padding:0 .1rem
    background:$bgColor
    .search-input
      width:100%
      height:.62rem
      text-align:center
      border-radius:.06rem
      color:#666
  .search-content
    position:absolute
    z-index:24
    top:1.58rem
    right:0
    left:0
    bottom:0
    background-color:#eee
    .search-item
      line-height:.62rem
      padding-left:.2rem
      background-color:#fff
      color:#666
</style>