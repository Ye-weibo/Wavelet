import Vue from 'vue'
import Router from 'vue-router'
import Store from '../Pages/Store'
import Community from '../Pages/Community'
import Cart from '../Pages/Cart'
import MyHome from '../Pages/MyHome'
import Service from '../Pages/Service'
import WeChat from '@/components/WeChat'
Vue.use(Router)



export default new Router({
  mode:'history',
  linkActiveClass:'current',
  routes: [
    {
      path: '/',
      name: 'MallHome',
      component: Store
    },
    {
      path: '/wechat',
      name: 'WeChat',
      component: WeChat
    },
    {
      path: '/store',
      name: 'Store',
      component: Store
    },
    {
      path: '/community',
      name: 'Community',
      component: Community
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/myhome',
      name: 'MyHome',
      component: MyHome
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    }
  ]
})
