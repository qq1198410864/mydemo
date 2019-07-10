import fastclick from 'fastclick'
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/index.css'
import store from './store'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'lib-flexible'
import { Carousel } from 'ant-design-vue'
Vue.config.productionTip = false
fastclick.attach(document.body)// body内所有click 300毫秒延迟都将去掉
Vue.prototype.$http = axios
Vue.use(VueAwesomeSwiper)
Vue.use(Carousel)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
