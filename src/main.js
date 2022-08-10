import Vue from 'vue'
import App from './App.vue'

import router from './router/index'
import store from './store/store'
import tosat from './components/common/toast/index'
Vue.config.productionTip = false
Vue.use(tosat)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

