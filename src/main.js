// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios"
import Base64 from "js-base64"
import store from "./mainStore"
import './assets/css/datepicker.css';
import './assets/css/dual-listbox.css';
// import './assets/css/global.css';
// import './assets/css/index.css';
import './assets/css/radio.css';
import './assets/css/CSS.css';


Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Vue.prototype.$Base64 = require('js-base64').Base64
Vue.prototype.$mainStore = store
/* eslint-disable no-new */
new Vue({
  Axios,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
