
import {request,request1}  from './request'
import Axios from 'axios'

export function getHomeMultiDate(){

  return request({
    url:'/home/multidata',
    
  })

}
export function getHomeGoods(type,page){

  return request1({
    url:'/home/data',
    params:{
      type,
      page
    }
  })

}

export async function getNew(){
  var res = await Axios.get('http://152.136.185.210:8000/api/z8/home/data',{
    params:{
      type:'pop',
      page:1
    }
  })
  return res
}