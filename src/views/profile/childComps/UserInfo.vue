<template>
  <div class="user-info">
    <img src="~assets/img/profile/urse2.png" alt="">
    <div class="user-item">
      <p>登录/注册</p>
      <div>
        <img src="~assets/img/profile/phone.svg" alt="">
        <span>暂无绑定手机号</span>
      </div>
    </div>
    <img src="~assets/img/profile/right.svg" alt="" class="right">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
p{
  margin: 0;
  padding-left: 7px;
}
  .user-info{
    background: var(--color-tint);
    height: 90px;
    display: flex;
    align-items: center;
    padding: 15px;
    box-sizing: border-box;
  }
  .user-info>img{
    width: 70px;
  }
  .user-item{
    color: #fff;
    margin-left: 10px;
  }
  .user-item img{
    width: 25px;
  }
  .user-item div{
    display: flex;
    align-items: center;
    font-size: 12px;
  }
  .right{
    width: 30px !important;
    margin-left: 30px;
  }
</style>