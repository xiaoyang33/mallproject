<template>
 <div class="cart">
    <NavBar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </NavBar>
    <CartList></CartList>
    <CartBottomBar/>
 </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import {mapGetters} from 'vuex'
import CartBottomBar from'./childComps/CartBottomBar'
export default {
  components:{
    NavBar,
    CartList,
    CartBottomBar
  },
  computed:{
    ...mapGetters(['cartLength'])
  },
  
}
</script>

<style scoped>
  .nav-bar{
    background: var(--color-tint);
    color: #fff;
  }
</style>