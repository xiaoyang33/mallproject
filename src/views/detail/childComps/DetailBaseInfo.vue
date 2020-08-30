<template>
  <div class="baseinfo" v-if="Object.keys(goods).length !==0">
    <div class="title">
      {{goods.title}}
    </div>
    <div class="price">
      <span class="n-price">{{goods.price}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span :style="{background:goods.discountBgColor}" class="decs">{{goods.discountDesc}}</span>
    </div>
    <div class="otherinfo">
      <div v-for="item in goods.columns.length-1" :key="item">{{goods.columns[item-1]}}</div>
      <div>{{goods.services[goods.services.length-1].name}}</div>
    </div>
    <div class="wuliu">
      <div class="wl-item" v-for="item in 3" :key="item">
        <span>
          <img :src="goods.services[item-1].icon" alt="">
          {{goods.services[item-1].name}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    goods:{
      type:Object
    }
  }
}
</script>

<style>
.baseinfo{
  padding: 10px;
  padding-bottom: 20px;
  color: #000;
  font-size: 14px;
  border-bottom: 2px solid #ddd;
}
.price{
  margin: 10px 0;
}
.n-price{
  font-size: 18px;
  color: red;
}
.o-price{
  color: #ccc;
  text-decoration: line-through;
  font-size: 12px;
  margin:0px 3px;
}
.decs{
  border-radius: 8px;
  padding: 1px 9px;
  color: #fff;
  font-size: 12px;
}
.otherinfo{
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #999;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
.wuliu{
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  /* background-position:  0 0; */
}
.wuliu img{
  width: 12px;
}
</style>