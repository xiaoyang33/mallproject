export default {
  cartLength(state){
    return state.cartList.length
  },
  cartList(state){
    return state.cartList
  },
  // 总价钱
  totalPrice(state){
    return state.cartList.filter(item => item.checked).reduce((pre,item)=>{
      return pre + item.lowNowPrice * item.count
    },0)
  },
  checkedLength(state){
    return state.cartList.filter( item => item.checked ).reduce((pre,item)=>{
      return pre + item.count*1
    },0)
  }
}