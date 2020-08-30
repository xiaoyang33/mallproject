<template>
  <div class="bottom-bar">
    <div class="left">
      <CheckButtom :isActive="isAllChecked" @click.native="allClick"/>
      <span>全选</span>
    </div>
    <div class="total-price">
      合计:￥{{totalPrice.toFixed(2)}}
    </div>
    <div class="gobuy" @click="gobuy">
      去计算:({{checkedLength}})
    </div>
  </div>
</template>

<script>
import CheckButtom from 'components/context/checkButton/CheckButton'
import {mapGetters} from 'vuex'
export default {
  components:{
    CheckButtom
  },
  methods:{
    allClick(){
      this.isAllChecked ? this.$store.commit('allChangeF') : this.$store.commit('allChangeT')
    },
    gobuy(){
      console.log(this.cartList.some(item=>item.checked));

      if(!this.cartList.some(item=>item.checked)){
        this.$toast.show('请选择商品')
      }
    }
  },
  computed:{
    ...mapGetters(['totalPrice','checkedLength','cartList']),
    isAllChecked(){
       return this.cartList.length == 0 ? false : this.cartList.every(item=>item.checked)
    }
  }
}
</script>

<style scoped>
.bottom-bar{
  display: flex;
  align-items: center;

  height: 40px;
  background: #eee;
}
.left{
  display: flex;
  align-items: center;

  width: 78px;

  height: 100%;
  padding-left: 15px;
  margin-right: 10px;
}
.left span{
  margin-left: 10px;
}
.total-price{
  flex: 1;
}
.gobuy{
  border-radius: 3px;
  height: 100%;
  width: 90px;

  line-height: 40px;
  background: red;
  color: #fff;
}
</style>