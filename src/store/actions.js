export default {
  addCart(context,payload){

    return new Promise((resolve,reject)=>{
      let oldProduct = context.state.cartList.find(item=>{
        return item.iid === payload.iid
      })
      if(oldProduct){
        oldProduct.count += 1
        context.commit('addCounter',payload)
        resolve('商品数量+1')
      }else{
        context.commit('addToCart',payload)
        resolve('商品添加成功')
      }
    })
  }
}