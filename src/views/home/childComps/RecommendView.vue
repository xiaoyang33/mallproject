<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  padding: 10px 0 20px;
  text-align: center;
  font-size: 12px;
  border-bottom: 8px solid #eee;
  /* box-sizing: border-box; */
}
.recommend-item{
  flex: 1;
}
.recommend-item img{
  width: 66px;
  height: 66px;
}
</style>