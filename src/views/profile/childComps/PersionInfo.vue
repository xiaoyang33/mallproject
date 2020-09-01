<template>
  <div>
    <ul>
      <li>
        <p><span>0.00</span>元</p>
        <div>我的余额</div>
      </li>
      <li>
        <p><span>0</span>个</p>
        <div>我的优惠</div>
      </li>
      <li>
        <p><span>0</span>分</p>
        <div>我的积分</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
ul{
  display: flex;
  border-bottom: 10px solid #F2F2F2;
}
ul li{
  padding: 10px 0 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  border-right: 1px solid #F2F2F2;
}
ul li:last-child{
  border: none;
}
ul li p span{
  font-size: 24px;
  color: #FF643E;
  font-weight: bold;
}
</style>