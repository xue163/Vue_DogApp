import Vue from 'vue'
import App from './App'
import router from './router'
import './mock/MockServer' // 后面就可以访问内部定义好的接口
import store from './store'

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
