/* 
      防抖函数
    */
export function debounce(fun,delay){

    let timer = null;
    return function() {
      if(timer) clearTimeout(timer)
       timer = setTimeout(()=>{
         fun.apply(this)
     },delay)
    }
  }