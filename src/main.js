import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import BootstrapVue  from "bootstrap-vue";
//import './app.scss';

import { mainroutes } from "./routes/mainroute";
import { _store } from "./store/store";
import services from "./services/ServiceProvider";

Vue.use(VueRouter);
Vue.use(BootstrapVue);
const _router = new VueRouter({
  routes:mainroutes,
  mode:'history',
  scrollBehavior:function(to,from,savedPosition){
    return { x: 0, y: 0 }
  }
});

Vue.prototype.$services = services;
new Vue({
  el: '#app',
  render: h => h(App),
  router:_router,
  store:_store
})
