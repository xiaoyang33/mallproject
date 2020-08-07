
import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:()=>import('views/home/Home')
  },
  {
    path:'/profile',
    component:()=>import('views/profile/Profile')
  },
  {
    path:'/cart',
    component:()=>import('views/cart/Cart')
  },
  {
    path:'/category',
    component:()=>import('views/category/Category')
  }
]

const router = new VueRouter({
  
  routes,
  mode:'history'
})

export default router;