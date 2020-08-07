

module.exports = {
  configureWebpack:{
    resolve:{
      // 配置可以省略后缀名的
      extensions:[],
      // 别名
      alias:{
        'assets':'@/assets',
        'common':'@/commom',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views'
      }
    }
  }
}