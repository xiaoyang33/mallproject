<template>
  <div>
    <ul>
      <li>
        <div>
          <img src="~assets/img/profile/msg.svg" alt />
        </div>
        <p>我的消息</p>
      </li>
      <li>
       <div>
          <img src="~assets/img/profile/mall.svg" alt class="little" />
       </div>
        <p>积分商城</p>
      </li>
      <li>
        <div>
          <img src="~assets/img/profile/vip.svg" alt  class="little"/>
        </div>
        <p>会员卡</p>
      </li>
      <li>
       <div>
          <img src="~assets/img/profile/cart.svg" alt />
       </div>
        <p>我的购物车</p>
      </li>
      <li>
       <div>
          <img src="~assets/img/profile/app.svg" alt class="little" />
       </div>
        <p>下载购物app</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
p{
  margin: 0;
}
img {
  width: 35px;
  height: 35px;
}
.little{
  width: 25px;
  height: 25px;
}
ul li {
  display: flex;
  align-items: center;
  font-size: 14px;
}
ul li:nth-child(3){
  border-bottom: 10px solid #F2F2F2;
  
}
ul li p{
  padding: 15px 0;
  width: 100%;
  border-bottom: 1px solid #F2F2F2;
}
ul li div{
  width: 35px;
  margin-right: 5px;
  text-align: center;
  margin-left: 20px;
  flex-shrink: 0;
}
</style>