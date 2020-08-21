<template>
  <div>
    <NarBar>
      <div slot="left"  class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles " class="title-item" :key="index"
          :class="{active:index === current}"
          @click="itemClick(index)"
        >{{item}}</div>
      </div>
    </NarBar>
  </div>
</template>

<script>
import NarBar from 'components/common/navbar/NavBar'
export default {
  components:{
    NarBar
  },
  data(){
    return {
      titles:['商品','参数','评论','推荐'],
      current:0
    }
  },
  methods:{
    itemClick(index){
      this.current = index
    },
    backClick(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.title{
  display: flex;
  font-size: 14px;
}
.title-item{
  text-align: center;
  flex: 1;
}
.active{
  color: var(--color-high-text);
}
.back img{
  margin-top: 10px;
}
</style>