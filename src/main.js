import Vue from 'vue'
import App from './App.vue'
import vueNotify from '../index'
Vue.config.productionTip = false
Vue.use(vueNotify)
new Vue({
  el: '#app',
  render: h => h(App)
})
