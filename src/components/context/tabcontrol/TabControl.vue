<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles" :key="item" :class="{active:current == index}" @click="itemClick(index)">
       <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      current:0
    }
  },
  methods:{
    itemClick(index){
      this.current = index
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style>
  .tab-control{
    display: flex;
    background: #fff;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .tab-control-item{
    flex: 1;
  }
  span{
    padding: 5px;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: 2px solid var(--color-high-text);
  }
</style>