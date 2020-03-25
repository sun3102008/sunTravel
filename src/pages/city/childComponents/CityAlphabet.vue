<template>
  <ul class="alphabet">
    <li class="item"
        :ref='item'
        v-for="(item,index) of letters" :key="index"
        @click="letterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
    >
      {{item}}
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
  },
  data () {
    return {
      touchStatus : false,
      //函数节流
      timer:null
      // obj:{
      //   'a1':[{name:"kobe",age:18}],
      //   'a2':[{name:"kobe1",age:46}],
      //   'a3':[{name:"kobe2",age:47}]
      // },
    }
  },
  computed: {
    //cities是对象，需要的是数组。
    letters () {
      const letters = []
      for (let i in this.cities){
        letters.push(i)
      }
      return letters
      //结果为 ['A','B','C']
    }
  },
  methods:{
    letterClick (e) {
      //把字母传递给list页面
      // console.log(e.target.innerText)
      this.$emit('letterClick',e.target.innerText)
    },
    //手指滚动字母表，自动跳转到 list相应区域
    handleTouchStart () {
      //手指开始触摸
      this.touchStatus = true
    },
    handleTouchMove (e) {
      //当触摸状态为真时，做相应逻辑
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
                  //1.计算到顶部的距离
//打印this.$refs得到的是个数组，:ref必须是item,[0]是DOM元素
        //  A: [li.item]
        // B: [li.item]
        // C: [li.item]
        //topY：此刻位置 距离当前组件的高度
            const topY = this.$refs['A'][0].offsetTop
            //touchY:手指距离顶部的 距离
            const touchY = e.touches[0].clientY - 79
            const index = Math.floor((touchY - topY) /22)
            // console.log(index)
            if (index >= 0 && index < this.letters.length){
              this.$emit('letterClick',this.letters[index])
            }

        }, 20);

      }

    },
    handleTouchEnd () {
      //手指结束触摸
      this.touchStatus = false
    }
  },
  mounted() {
    // var obj1=[]
    // for (let i in this.obj){
    //   obj1.push(i)
    // }
    // console.log(obj1)

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