<template>
  <div>
    <NavBar class="nav-bar">
      <div slot="center">
        商城
      </div>
    </NavBar>
    <UserInfo/>
    <Persion/>
    <Cate/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import UserInfo from './childComps/UserInfo'
import Persion from './childComps/PersionInfo'
import Cate from './childComps/Cate'
export default {
  components:{
    NavBar,
    UserInfo,
    Persion,
    Cate
  }
}
</script>

<style scoped>
  .nav-bar{
    background: var(--color-tint);
    color: #fff;
    font-weight: bold;
  }
</style>