import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
Vue.config.productionTip = false

// 安装fastClick插件快速点击
FastClick.attach(document.body)
// 安装toast插件
Vue.use(toast)
// 安装懒加载插件
Vue.use(VueLazyLoad)

// 给Vue原型上添加一个$bus 值是vue实例当做事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


/* 
  fastClick 解决300ms延迟问题
  vue-lazyload 图片懒加载

*/