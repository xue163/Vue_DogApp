import Vue from 'vue'
import App from './App'
import router from './router'
import './mock/MockServer' // 后面就可以访问内部定义好的接口
import store from './store'
import Vuelazyload from 'vue-lazyload'
import loading from './common/images/index/default-epet.png'
import MintUI from "mint-ui"
Vue.use(MintUI)

Vue.use(Vuelazyload, {
  loading
  // <img v-lazy="food.image">
})

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
