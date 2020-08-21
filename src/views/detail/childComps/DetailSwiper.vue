<template>
  <Swiper class="swipera" :interval="2300">
    <swiperItem v-for="(item,index) in topImages" :key="index">
      <img :src="item"/>
    </swiperItem>
  </Swiper>
</template>

<script>
import {Swiper , SwiperItem} from '../../../components/common/swiper/swiper/index'
export default {
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.swipera{
  height: 220px;
  overflow: hidden;
}
.swipera img{
  transform: translateY(-30px);
}
</style>