import Vue from 'vue'
import App from './App.vue'
import vueNotify from './plugin/index'
Vue.config.productionTip = false
Vue.use(vueNotify)
new Vue({
  render: h => h(App),
}).$mount('#app')
