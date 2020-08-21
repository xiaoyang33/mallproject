import {request1}  from './request' 

export function getDetails(iid){

  return request1({
    url:'detail',
    params:{
      iid,
    }
  })
}


export class Goods{
  constructor(columns,itemInfo,shopInfo){
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns,
    this.services = shopInfo.services
  }
}