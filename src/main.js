import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import * as echarts from 'echarts';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.prototype.$echarts=echarts
new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
