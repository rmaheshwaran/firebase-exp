import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Stock from '@/components/Stock'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'login',
      component: Login
    },
    {
      path: 'login',
      name: 'login',
      component: Login
    },
    {
      path: 'register',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: 'stock',
      name: 'Stock',
      component: Stock,
      props: true
    }
  ]
})
