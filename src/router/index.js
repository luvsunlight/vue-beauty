import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/Home'
import Welfare from '../page/Welfare'
import Daily from '../page/Daily.vue'
import Ios from '../page/Ios'
import Android from '../page/Android'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/welfare',
      name: 'welfare',
      component: Welfare
    },
    {
      path: '/daily',
      name: 'daily',
      component: Daily
    },
    {
      path: '/ios',
      name: 'ios',
      component: Ios
    },
    {
      path: '/android',
      name: 'android',
      component: Android
    }
  ]
})
