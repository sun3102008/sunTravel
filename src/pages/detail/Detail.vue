<template>
  <div>
    <detail-banner 
      :sightName = 'sightName' :bannerImg='bannerImg'
      :gallaryImgs = 'gallaryImgs'
    ></detail-banner>
    <detail-header></detail-header>
    <detail-list :list='categoryList'></detail-list>
  </div>
</template>

<script>
import DetailBanner from './childCom/DetailBanner'
import DetailHeader from './childCom/DetailHeader'
import DetailList from './childCom/DetailList'

import axios from 'axios'

export default {
  name:'Detail',
  data () {
    return {
      sightName:'',
      bannerImg:'',
      gallaryImgs:[],
      categoryList:[]
    }
  },
  components:{
    DetailBanner,
    DetailHeader,
    DetailList
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json').then(res =>{
        console.log(res)
      if(res.data.ret && res.data.data){
        this.sightName = res.data.data.sightName
        this.bannerImg = res.data.data.bannerImg
        this.gallaryImgs = res.data.data.gallaryImgs
        this.categoryList = res.data.data.categoryList
        // console.log(this.categoryList)
        }       
      })
    }
  },
  mounted() {
    this.getDetailInfo()
  },
}
</script>

<style lang="stylus" scoped>
  
</style>