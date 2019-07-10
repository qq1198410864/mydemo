import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Find from '@/components/home/find/FInd'
import Mine from '@/components/home/mine/Mine'
import Take from '@/components/home/take/Take'
import Order from '@/components/home/order/Order'
import Seller from '@/components/seller/Seller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/take'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/find',
          component: Find
        },
        {
          path: '/mine',
          component: Mine
        },
        {
          path: '/take',
          component: Take
        },
        {
          path: '/order',
          component: Order
        }
      ]
    },
    {
      path: '/seller',
      component: Seller
    }
  ]
})
