import Vue from 'vue'
import App from './App.vue'
//引入 vue-router
import VueRouter from 'vue-router'
// 使用vueRouter
Vue.use(VueRouter)
//引入相应 的组件
import music from './commpent/music.vue'

import news from './commpent/news.vue'
//创建路由路径
let routes=[
  {path:'/music',component:music},
  {path:'/news',component:NEWS}
]

//创建实例对象
let router=new  VueRouter({
  routes:routes
})
new Vue({
  el: '#app',
  render: h => h(App),
  router  
})
