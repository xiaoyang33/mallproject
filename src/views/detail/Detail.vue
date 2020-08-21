<template>
  <div>
    <DetailNavBar></DetailNavBar>
    <DetailSwiper :topImages="topImages"></DetailSwiper>
    <DetailBaseInfo :goods="goods"></DetailBaseInfo>
  </div>
</template>

<script>
import {getDetails,Goods}  from 'network/details'
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
export default {
  name:'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
  },
  data(){
    return {
      iid:null,
      topImages:null,
      goods:{}
    }
  },
  created(){
    this.iid = this.$route.params.iid
    // console.log(this.iid);
   getDetails(this.iid).then(res=>{
     console.log(res);
     this.topImages = res.result.itemInfo.topImages
     this.goods = new Goods(res.result.columns,res.result.itemInfo,res.result.shopInfo)
     console.log(this.goods);
   })
  }
}
</script>

<style scoped>

</style>