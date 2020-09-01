<template>
  <div>
    <Scroll class="content">
      <ul class="list">
        <li 
          :class="{active:index === currentIndex}" 
          v-for="(item , index) in info" :key="item.miniWallkey"
          @click="itemClick(index,item.maitKey,item.miniWallkey)"
        >{{item.title}}</li>
      </ul>
    </Scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
export default {
  props: {
    info: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data(){
    return {
      currentIndex:0
    }
  },
  components: {
    Scroll,
  },
  methods:{
    itemClick(index,maitKey,miniWallkey){
      this.currentIndex = index
      this.$emit('hasChange',maitKey,miniWallkey)
    }
  }
};
</script>

<style scoped>
.content{
  height:calc(100vh - 40px - 49px);
  overflow: hidden;
  background: #eee;
}
.list {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
}
.list li {
  height: 45px;
  line-height: 45px;
  box-sizing: border-box;
}
.active{
  background: #fff;
  border-left: 5px solid var(--color-high-text);
  color: var(--color-high-text);
  font-weight: bold;
}
</style>