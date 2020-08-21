import Vue from 'vue'
import App from './App.vue'
import router from './routes'
Vue.config.productionTip = false

// 给Vue原型上添加一个$bus 值是vue实例当做事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
