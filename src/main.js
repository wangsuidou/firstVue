import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* eslint-disable no-new */
//定义路由组件
const Worldcloud = require('./components/cloud.vue')


//定义路由
const routers = [

	{path:'/',redirect:'worldcloud'},
	{path:'/worldcloud',components:Worldcloud}

]

//创建路由实例

const router = new VueRouter({
	routers
})



new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
