<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions" id="swiper">
    <swiper-slide v-for="img in banners" :key="img.acm"><img :src="img.image" alt=""></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
 data() {
      return {
        swiperOptions: {
          notNextTick: true,
          pagination: {
            el: '.swiper-pagination',
          },
          autoplay:{
            delay:1000
          },
          loop:true,
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      // console.log('Current Swiper instance object', this.swiper)
      // this.myswiper = new Swiper('.swiper-container',{})
      
    },
    updated(){
      new Swiper('.swiper-container', {})
    }
}
</script>

<style scoped>
  #swiper{
    /* height: 200px; */
    font-size: 0;
  }
  img{
    width: 100%;
  }
  .swiper-pagination{
    /* background: ; */
    width: 100px;
    height: 40px;
    bottom: 0;
  }
</style>