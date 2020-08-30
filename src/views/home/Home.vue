<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
      <TabControl
        ref="tabcontrol1"
       @tabClick="itemClick" 
       class="fixed"
       v-show="isFixed"
       :titles="['流行','新款','精选']"></TabControl>
    <Scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <Swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></Swiper>
      <RecommednView :recommends="recommends"></RecommednView>
      <FeatureView></FeatureView>
      <TabControl
        ref="tabcontrol2"
       @tabClick="itemClick" 
       :titles="['流行','新款','精选']"></TabControl>
      <GoodsList :goods="showgoods"></GoodsList>
    </Scroll>
    <BackTop @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import { getHomeMultiDate, getHomeGoods } from "network/home.js";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/context/tabcontrol/TabControl";
import GoodsList from "components/context/goods/GoodsList";
import BackTop from "components/context/backTop/BackTop";

import Swiper from "./childComps/Swiper";
import RecommednView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import Scroll from "components/common/scroll/Scroll";

import {debounce}  from '../../common/utils'
import {itemImgLoad} from '../../common/minxins'
export default {
  components: {
    NavBar,
    Swiper,
    RecommednView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        new: {
          page: 0,
          list: [],
        },
        pop: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      currentType: "pop",
      isShowBackTop: false,
      tabOffsetTop:0,
      isFixed:false,
      saveY:0,
      itemImgLoad:null
    };
  },
  destroyed(){
    console.log(1);
  },
  activated(){
    // console.log('active');
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0,this.saveY,0)
  },
  deactivated(){
    // console.log(this.$refs.scroll.scroll.y);
    this.$bus.$off('ImageLoad',this.itemImgLoad)
    this.saveY = this.$refs.scroll.scroll.y
    // console.log(this.saveY);
  },
  created() {
    this.getHomeMultiDate();
    this.getGoods("pop");
    this.getGoods("new");
    this.getGoods("sell");
    
  },
  mixins:[itemImgLoad],
  computed: {
    showgoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    /* 
      事件监听
    */
   swiperImageLoad(){
    // 吸顶效果
    // 组件下面有个$el可以拿到标签元素
    // console.log(this.$refs.tabcontrol2.$el.offsetTop);
    this.tabOffsetTop = this.$refs.tabcontrol2.$el.offsetTop
   },
   loadMore(){
     this.getGoods(this.currentType)
   },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000 ? true : false;
      this.isFixed = -position.y > this.tabOffsetTop
    },
    itemClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    /* 
      网络请求相关
    */
    getHomeMultiDate() {
      getHomeMultiDate().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // console.log(res);
      });
    },
    getGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
      });
      this.goods[type].page++;
      // this.$refs.scroll.finish()
      // console.log( this.goods[type].page++);
      this.goods[type].page < 2 ? null : this.$refs.scroll.finish()
    },
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  position: relative;
  height: 100vh;
  box-sizing: border-box;
}
.home-nav {
  background: var(--color-tint);
  color: #fff;
  font-size: 16px;

  position: relative;
  z-index: 9;
}
.fixed{
  position: relative;
  z-index: 9;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>