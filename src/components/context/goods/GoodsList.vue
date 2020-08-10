<template>
  <div class="goods">
    <ul>
      <li v-for="item in goods" :key="item.iid">
        <a :href="item.link">
          <img :src="item.show.img" alt="">
        </a>
        <h5>{{item.title}}</h5>
        <p>
          <span>￥{{item.price}}</span>
          <span class="collect">{{item.cfav}}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    goods:{
      type:Array,
      defaule(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods{
  padding: 0 8px;
  font-size: 12px;
  box-sizing: border-box;
}
.goods ul{
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  /* box-sizing: border-box; */
}
.goods ul li{
  width: 49.3%;
  padding-right: 4px;
  box-sizing: border-box;
}
.goods ul li:nth-child(2n){
  margin-left: 4px;
  padding-right: 0;
}
.goods ul li a{
  display: block;

  height: 230px;
}
.goods ul li img{
  width: 100%;
  border-radius: 5px;
  height: 230px;
}
.goods ul li h5{
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
}
.goods ul li p{
  margin: 0;
  display: flex;
  justify-content: center;
}
.goods ul li p span:first-child{
  color:red
}
.collect{
  background: url('~assets/img/common/collect.svg') no-repeat 0 5px;
  padding-left: 14px;
  background-size:12px 12px ;
  margin-left: 6px;
}
</style>