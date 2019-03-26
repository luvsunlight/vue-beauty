// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from  './store'
import VueLazyload from 'vue-lazyload'; 
import infiniteScroll from 'vue-infinite-scroll'
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/index.js'

Vue.component('v-icon', Icon)
Vue.use(infiniteScroll)
Vue.use(VueLazyload, {
  error: require('./assets/404.png'),
  loading: require('./assets/loading.gif'),
  attempt: 1
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
