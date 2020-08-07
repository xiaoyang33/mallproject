<template>
  <div>
   <NavBar class="home-nav">
     <div slot="center">购物街</div>
   </NavBar>
   <Swiper></Swiper>
    <h1>Home</h1>
  </div>
</template>

<script>
import {getHomeMultiDate} from 'network/home.js'
import NavBar from 'components/common/navbar/NavBar'
import Swiper from 'components/common/swiper/Swiper'
export default {
  components:{
    NavBar,
    Swiper
  },
  data(){
    return {
      banners:[],
      recommends:[]
    }
  },
  created(){
    getHomeMultiDate().then(res=>{
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
      // console.log(res);
    })
  }
}
</script>

<style scoped>
.home-nav{
  background: var(--color-tint);
  color: #fff;
  font-size: 16px;
}
</style>