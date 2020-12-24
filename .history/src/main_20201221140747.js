import Vue from 'vue'
import App from './views/App.vue'
import router from './router'
import store from './store'
import api from './http/api' //引入api


import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false

//把api挂载在this上面  这个$是为了避免与组件里变量重名
Vue.prototype.$api = api

Vue.use(ViewUI);  //使用ViewUI 组件

const RouterConfig = {
  routes: Routers
};
const router = new VueRouter(RouterConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
