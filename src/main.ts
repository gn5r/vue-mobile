import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import "@/assets/css/main.scss"

Vue.config.productionTip = false

// document.body.style.height = `${window.innerHeight}px`

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
