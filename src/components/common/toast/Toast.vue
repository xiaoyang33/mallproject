<template>
  <div class="toast" v-show="isShow">
    {{message}} 
  </div>
</template>

<script>
export default {
  data(){
    return {
      message:'',
      isShow:false
    }
  },
  methods:{
    show(msg='弹出的信息',duration=2000){
      this.isShow = true
      this.message = msg

      setTimeout(()=>{
        this.isShow = false
        this.message = ''
      },duration)
    }
  }

}
</script>

<style>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: rgba(0, 0, 0, .75);
  color: #fff;
  padding: 8px 14px;
  border-radius: 4px;
  z-index: 999;
}
</style>