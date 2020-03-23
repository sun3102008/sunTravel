<template>
  <div>
    <div class="title">周末去哪</div>
       <ul>
         <li 
            class='item border-bottom'
            v-for='item of recommandList'
            :key = 'item.id'          
         >  
            <div class="item-img-wrapper">
               <img :src="item.imgUrl" class="item-img">              
            </div>
            <div class="item-info">
              <p class="item-title">{{item.title}}</p>
              <p class="item-desc">{{item.desc}}</p>            
            </div>
         </li>
       </ul>   
  </div>
</template>
<script>
export default {
  name:'HomeWeekend',
  data () {
    return {
      recommandList :[{
          id:'0001',
          imgUrl:'http://img1.qunarzz.com/sight/source/1811/65/7322301be0a92c.jpg_r_640x214_a3485c55.jpg',
          title :'青城道温泉',
          desc:'温泉好去处好去好去好去好去好去好去好去'
        },
        {
          id:'0002',
          imgUrl:'http://img1.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg',
          title :'青城道温泉',
          desc:'温泉好去处'
        },{
          id:'0003',
          imgUrl:'http://img1.qunarzz.com/sight/source/1507/a0/7087c85d439e4.jpg_r_640x214_4cd56a30.jpg',
          title :'青城道温泉',
          desc:'温泉好去处'
        }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~assets/css/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow : hidden
    height :0
    padding-bottom :33.9%
  .item-img
    width: 100%   
  .item-info   
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
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