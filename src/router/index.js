import Vue from 'vue'
import VueRouter  from "vue-router"
import Msite from "../pages/Msite/Msite.vue"
import Type from "../pages/Type/Type.vue"
import Cart from "../pages/Cart/Cart.vue"
import Login from "../pages/Login/Login.vue"

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/msite',
      component:Msite
    },
    {
      path:'/type',
      component:Type
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/login',
      component:Login
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})



