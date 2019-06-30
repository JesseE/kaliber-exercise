import Vue from "vue";
import Main from "./main.vue";
import './index.less';
import VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import ('./pages/home.vue')
  }
]

const router = new VueRouter({
  routes
})

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(Main)
});
