import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)

import Axios from 'axios'
Vue.$http = Axios
Axios.defaults.baseURL = 'https://gentle-citadel-77253.herokuapp.com/'
Axios.defaults.headers.common.Accept = 'application/json'
Axios.defaults.withCredentials = true

Vue.config.productionTip = false

import userLogin from '@/api/users.js'
userLogin.checkLoggedIn()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
