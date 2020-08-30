module.exports = {
  plugins:{
    autoprefixer:{},
    "postcss-px-to-viewport":{
      viewportWidth:375, //视窗的宽度，对应的是我们设计稿的宽度
      viewportHeight:667, //视窗高度，对应的是我们设计稿的高度
      unitPrecision:6,  //指定px转换为视窗单位值的小数位数(很多时候无法被整除)
      viewportUnit:'vw', //指定需要转换成的视窗单位，推荐vw
      selectorBlackList:['ignore','tab-bar','tab-bar-item'],  //指定不需要转换的类
      minPixelValue:1,  //小于或等于1px的不转换为视窗单位
      mediaQuery:false, //是否允许在媒体查询中转换px
    }
  }
}