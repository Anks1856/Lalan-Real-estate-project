import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import VueRouter from 'vue-router';
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)
// console.log(router);

Vue.config.productionTip = false
Vue.use(VueRouter);


new Vue({
  render: h => h(App),
  router ,
}).$mount('#app')
