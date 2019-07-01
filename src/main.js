import Vue from "vue";
import Main from "./main.vue";
import './index.less';
import VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import ('./pages/home.vue')
  },
  {
    path: '/dolor',
    component: () => import ('./pages/dolor.vue')
  },
  {
    path: '/lorem',
    component: () => import ('./pages/lorem.vue')
  },
  {
    path: '/ipsum',
    component: () => import ('./pages/ipsum.vue')
  },
  {
    path: '/sit',
    component: () => import ('./pages/sit.vue')
  },
  {
    path: '/amet',
    component: () => import ('./pages/amet.vue')
  },
  {
    path: '/consectetur',
    component: () => import ('./pages/consectetur.vue')
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
