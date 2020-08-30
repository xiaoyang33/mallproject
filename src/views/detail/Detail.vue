<template>
  <div id="detail">
    <DetailNavBar class="detail-nav"
      @titleClick = "titleClick"
      ref="navBar"
    ></DetailNavBar>
    <Scroll class="content" ref="scroll" :probeType="3"
     @scroll="navScroll"
     >
      <DetailSwiper :topImages="topImages" />
      <DetailBaseInfo :goods="goods" />
      <DetailShopInfo :shop="shop" />
      <DetailGoodsInfo :detailInfo="detailInfo" @imgLoad="imgLoad" />
      <DetailparamInfo ref="params" :paramInfo="paramInfo"/>
      <DetailCommentInfo ref="comment" :commentInfo="commentInfo"/>
      <GoodsList ref="recommend" :goods="goodsList"/>
    </Scroll>
    <DetailBottomBar @addCart="addToCart"/>
    <BackTop @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>

import { getDetails, Goods, Shop ,GoodsParam,getDetailGoods} from "network/details";
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import Scroll from "components/common/scroll/Scroll";
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailparamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import GoodsList from 'components/context/goods/GoodsList'
import DetailBottomBar from './childComps/DetailBottomBar'
import BackTop from 'components/context/backTop/BackTop'
import {debounce} from '../../common/utils'
import {itemImgLoad} from '../../common/minxins'


import {mapActions} from 'vuex'
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailparamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop,
  },
  data() {
    return {
      iid: null,
      topImages: null,
      goods: {},
      shop: {},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      goodsList:[],
      themeTopYs:[],
      getThemTop:null,
      currentIndex:0,
      isShowBackTop: false,
    };
  },
  destoryed(){
      this.$bus.$off('ImageLoad',this.itemImgLoad)
  },
  mounted(){
    
  },
  mixins:[itemImgLoad],
  created() {
    this.iid = this.$route.params.iid;
    // console.log(this.iid);
    getDetails(this.iid).then((res) => {
      console.log(res);
      //  顶部轮播图数据
      this.topImages = res.result.itemInfo.topImages;
      //  获取商品信息
      this.goods = new Goods(
        res.result.columns,
        res.result.itemInfo,
        res.result.shopInfo
      );
      //  console.log(this.goods);
      //  创建店铺信息
      this.shop = new Shop(res.result.shopInfo);
      // 商品详情数据展示
      this.detailInfo = res.result.detailInfo
      // console.log(this.detailInfo);
      // 商品规格数据
      this.paramInfo = new GoodsParam(res.result.itemParams.info,res.result.itemParams.rule)
      // console.log(this.paramInfo);
      if(res.result.rate.cRate !== 0){
        this.commentInfo = res.result.rate.list[0]
      }
    });
    getDetailGoods().then(res=>{
      this.goodsList = res.data.list
      // console.log(this.goodsList);
    })

    // 获取Dom元素高度 并且封装在防抖函数内
    this.getThemTop = debounce(()=>{
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)
    },100)
  },
  methods:{
    ...mapActions(['addCart']),
    titleClick(index){
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],500)
    },
    imgLoad(){
      this.refresh()
      // 调用封装过的获取Dom元素的防抖函数
      this.getThemTop()
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    navScroll(position){
      const positions  = -position.y
      this.isShowBackTop = -position.y > 1000 ? true : false;
      // console.log(positions);

      for(let i = 0 ; i<this.themeTopYs.length -1 ;i++){
        i = i -0
        if( this.currentIndex !== i && this.themeTopYs[i]<positions && this.themeTopYs[i+1]>positions){
          // console.log(i);
          this.currentIndex = i
          this.$refs.navBar.current = this.currentIndex
        }
      }
    },
    addToCart(){
      const product = {}
      product.img = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.lowNowPrice = this.goods.lowNowPrice
      product.iid = this.iid
      this.addCart(product).then(res=>{
        // console.log(res);
        // console.log(this.$toast);
        this.$toast.show(res,2000)
      })
    }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background: #fff;
  height: 100vh;
}
.detail-nav{
  position: relative;
  z-index: 9;
  background: #fff;
}
.content{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>