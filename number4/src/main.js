import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueHeadful from 'vue-headful'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.component('vue-headful', vueHeadful);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
