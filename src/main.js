import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins/axios'
import './scss/index.scss'
import i18n from './locales/i18n'
import VueClipboard from 'vue-clipboard2'

import moment from 'moment'
Vue.prototype.$moment = moment

Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  i18n,
  VueClipboard,
  render: h => h(App),
}).$mount('#app')
