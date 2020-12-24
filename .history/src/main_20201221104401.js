import Vue from 'vue'
import App from './views/App.vue'
import router from './router'
import store from './store'
//引入api
import api from './http/api'
Vue.config.productionTip = false

//把api挂载在this上面  这个$是为了避免与组件里变量重名
Vue.prototype.$api = api
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
