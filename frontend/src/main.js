import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// temporario!
require('axios').defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikx1aXogRmVsaXBlIExpYmVydGlubyIsImVtYWlsIjoicmF6aUBjb2Qzci5jb20uYnIiLCJhZG1pbiI6InRydWUiLCJpYXQiOjE1NzUzMTI1MjEsImV4cCI6MTU3NTU3MTcyMX0.31INL5VTeiGOF7JfVzMbOA8k3GlqX75WSVhn6zYzt0c'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')