export default {
  tabControlClick(state,payload){
    state.currentIndex = payload
  },
  addCounter(state,payload){
    payload.count +=1
  },
  addToCart(state,payload){
    payload.checked = true
    payload.count =1
    state.cartList.push(payload)
  },
  changestatus(state,payload){
      for (let item of state.cartList) {
        // console.log(item);
        if(item.iid === payload){
          item.checked = !item.checked
          return
        }
      }
  },
  allChangeF(state){
    state.cartList.forEach(item=>{
      item.checked = false
    })
  },
  allChangeT(state){
    state.cartList.forEach(item=>{
      item.checked = true
    })
  }
}