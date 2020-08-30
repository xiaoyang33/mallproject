<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    // 创建scroll对象
    (this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    })),
      // 监听滚动位置
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
    // 下拉加载更多
    if(this.pullUpLoad){
      this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    })
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      // console.log(1);
      this.scroll && this.scroll.refresh();
    },
    finish(){
      this.scroll && this.scroll.finishPullUp()
    }
  },
};
</script>

<style>
</style>