<template>
  <TabBar>
    <TabBarItem path="/home">
     <img slot="item-icon" src="~assets/img/tabbar/shouye.svg" alt="">
     <img slot="item-icon-active" src="~assets/img/tabbar/shouyeac.svg" alt="">
     <div slot="item-text">首页</div>
   </TabBarItem>
   <TabBarItem  path='/category'>
     <img slot="item-icon" src="~assets/img/tabbar/leimupinleifenleileibie2.svg" alt="">
     <img slot="item-icon-active" src="~assets/img/tabbar/leimupinleifenleileibie2ac.svg" alt="">
     <div slot="item-text">分类</div>
   </TabBarItem >
   <TabBarItem path="/cart">
     <img slot="item-icon" src="~assets/img/tabbar/gouwuchekong.svg" alt="">
     <img slot="item-icon-active" src="~assets/img/tabbar/gouwuchekongac.svg" alt="">
     <div slot="item-text">购物车</div>
   </TabBarItem>
   <TabBarItem path="/profile">
     <img slot="item-icon" src="~assets/img/tabbar/wode.svg" alt="">
     <img slot="item-icon-active" src="~assets/img/tabbar/wodeac.svg" alt="">
     <div slot="item-text">我的</div>
   </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from 'components/common/TabBar/TabBar';
import TabBarItem from 'components/common/TabBar/TabBarItem'
export default {  
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>