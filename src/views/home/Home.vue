<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <Scroll class="content" ref="scroll">
      <Swiper :banners="banners"></Swiper>
      <RecommednView :recommends="recommends"></RecommednView>
      <FeatureView></FeatureView>
      <TabControl class="control-bar" @tabClick="itemClick" :titles="['流行','新款','精选']"></TabControl>
      <GoodsList :goods="showgoods"></GoodsList>
    </Scroll>
    <BackTop @click.native="backClick"/>
  </div>
</template>

<script>
import { getHomeMultiDate, getHomeGoods } from "network/home.js";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/context/tabcontrol/TabControl";
import GoodsList from "components/context/goods/GoodsList";
import BackTop from 'components/context/backTop/BackTop'

import Swiper from "./childComps/Swiper";
import RecommednView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import Scroll from 'components/common/scroll/Scroll';
export default {
  components: {
    NavBar,
    Swiper,
    RecommednView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
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
    };
  },
  created() {
    this.getHomeMultiDate();
    this.getGoods("pop");
    this.getGoods("new");
    this.getGoods("sell");
  },
  computed: {
    showgoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    /* 
      事件监听
    */
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
    backClick(){
      this.$refs.scroll.scrollTo(0,0,500)
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
    },
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  position: relative;
  height: 100vh;
  box-sizing: border-box;
}
.home-nav {
  background: var(--color-tint);
  color: #fff;
  font-size: 16px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.control-bar {
  position: sticky;
  top: 43px;
}
.content{
  /* height: 300px; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  /* overflow: hidden; */
}
</style>