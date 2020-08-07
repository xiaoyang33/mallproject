<template>
  <swiper ref="mySwiper" :options="swiperOptions" id="swiper">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  <!-- <div v-swiper:mySwiper="swiperOption" id="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="banner" v-for="banner in banners">
        <img :src="banner">
        <div>{{banner}}</div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div> -->
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
      return {
        swiperOption: {
          notNextTick: true,
          pagination: {
            el: '.swiper-pagination'
          },
          loop:true,
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      // this.swiper.slideTo(1, 1000, false)
    }
}
</script>

<style scoped>
  #swiper{
    height: 200px;
    background: red;
  }
  .swiper-pagination{
    /* background: ; */
    width: 100px;
    height: 40px;
    bottom: 0;
  }
</style>