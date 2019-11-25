import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// temporario!
require('axios').defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikx1aXogRmVsaXBlIExpYmVydGlubmkiLCJlbWFpbCI6InJhemlAY29kM3IuY29tLmJyIiwiYWRtaW4iOiJ0cnVlIiwiaWF0IjoxNTc0NzA2MzE5LCJleHAiOjE1NzQ5NjU1MTl9.o2xOFquORLCU9QMQEPnJT9THfD7UXqN5W4BoKhQaCkc'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')