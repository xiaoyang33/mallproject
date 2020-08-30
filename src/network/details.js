import {request1}  from './request' 
import { getHomeGoods } from './home'

export function getDetails(iid){

  return request1({
    url:'detail',
    params:{
      iid,
    }
  })
}

export function getDetailGoods(){
  return request1({
    url:'recommend'
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
    this.desc = itemInfo.desc
    this.lowNowPrice = itemInfo.lowNowPrice
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}