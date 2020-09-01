<template>
  <div class="warpper">
    <NavBar class="nav">
      <div slot="center">商品分类</div>
    </NavBar>
    <div class="container">
      <TabCategory class="tab-category" :info="categoryInfo" @hasChange = "handleChange"/>
      <Scroll class="rigth" ref="scroll">
        <div class="right-item">
          <TabContent :cate-content-info="cateContentInfo" @imgLoad="imgLoad"/>
          <TabControl :titles="['综合','新品','销量']" @tabClick="tabClick"/>
          <GoodsList :goods="goods[currentType]"/>
        </div>
      </Scroll>
    </div>
  </div>
</template>

<script>
import getCategory from 'network/category'
import {getSubcategory,getCategoryDetail} from 'network/category'
import {debounce} from '../../common/utils'

import NavBar from 'components/common/navbar/NavBar'
import TabCategory from './childComps/TabCategory'
import TabContent from './childComps/TabContent'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/context/tabcontrol/TabControl'
import GoodsList from 'components/context/goods/GoodsList'
export default {
  components:{
    NavBar,
    TabCategory,
    TabContent,
    Scroll,
    TabControl,
    GoodsList
  },
  data(){
    return {
      categoryInfo:[],
      cateContentInfo:[],
      refresh:null,
      goods:{
        pop:[],
        sell:[],
        new:[]
      },
      currentType:'pop',
      miniWallkey:0
    }
  },
  created(){
    getCategory().then(res=>{
      // 左边列表
      this.categoryInfo = res.data.category.list
      // 加载就获取第一个流行信息
      this.getSubcategory(this.categoryInfo[0].maitKey)
      // 保存miniWallkey信息
      this.miniWallkey = this.categoryInfo[0].miniWallkey
      // 获取面分类信息
      this.getAll()
      // console.log(this.categoryInfo);
    })
  },
  mounted(){
     this.refresh = debounce(this.$refs.scroll.refresh,100)
  },
  methods:{
    handleChange(maitKey,miniWallkey){
      this.miniWallkey = miniWallkey
      this.getSubcategory(maitKey)
    },
    // 获取数据右边上面列表数据
    getSubcategory(maitKey){
      getSubcategory(maitKey).then(res=>{
        this.cateContentInfo = res.data.list
      })
    },
    imgLoad(){
      this.refresh()
    },
    tabClick(index){
      switch(index){
        case 0:
          this.currentType='pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
    },
    // 获取下方推荐商品
    getDetail(type){
      getCategoryDetail(this.miniWallkey,type).then(res=>{
        this.goods[type] = res
      })
    },
    getAll(){
      this.getDetail('pop')
      this.getDetail('new')
      this.getDetail('sell')
    }
  },
  watch:{
    miniWallkey(){
      this.getAll()
    }
  }
}
</script>

<style>
.nav{
  background: var(--color-tint);
  color: #fff;
  font-weight: bold;
}
.container{
  display: flex;
}
.tab-category{
  width: 30%;
}
.rigth{
  width: 70%;
  height: calc(100vh - 40px - 49px);
  overflow: hidden;
}
.right-item{
  padding: 30px  0;
}
</style>