<template>
  <div class="check-button" :class="{active:isActive}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  props:{
    isActive:{
      type:Boolean,
      defaule:true
    }
  },
}
</script>

<style scoped>
.check-button{
  width: 20px;
  height: 20px;
  text-align: center;
  flex-shrink: 0;
  line-height: 20px;
  border-radius: 50%;
  border: 2px solid #ccc;
}
.active{
  background: var( --color-high-text);
  border-color:var( --color-high-text);
}
</style>