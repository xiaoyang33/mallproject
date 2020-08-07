<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    // 可以传入颜色值进行更改默认的
    activeStyle(){
      return this.isActive ? {color : this.activeColor} : {}
    }
  },
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'#f39'
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path).catch(err=>err)
    },
  }

};
</script>

<style scoped>
.tab-bar-item {
  font-size: 14px;
  flex: 1;
  height: 49px;
  text-align: center;
}
.tab-bar-item img{
  widows: 22px;
  height: 22px;
  vertical-align: middle;
  margin-top: 3px;
  margin-bottom: 2px;
}
.active{
  color: #f39;
}
</style>