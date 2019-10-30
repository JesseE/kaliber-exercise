import Vue from "vue";
import Main from "./main.vue";
import './index.less';
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

const routes = [
  {
    path: '/',
    component: () => import ('./pages/home.vue')
  },
]

const router = new VueRouter({
  routes
})

Vue.use(VueRouter, VueMaterial)

new Vue({
  el: '#app',
  router,
  render: h => h(Main)
});
