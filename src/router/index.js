import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);
/*import Add from '../components/Add.vue'
import  Home from '../components/Home.vue'
import  Collect from '../components/Collect.vue'
import  Detail from '../components/Details.vue'
import  List from '../components/List.vue'*/



export default new Router({
  mode:'history',
  routes: [
    {
      path: '/', redirect: '/home'
    },
    {
      path: '/home',
      component:()=>import("../components/Home.vue"),
      meta: {keepAlive:true,title:'首页'}
      },//this.$route.meta.keepAlive
    {
      path: '/collect',
      component:()=>import("../components/Collect.vue"),
      meta: {title:'购物车'}
    },
    {
      path: '/add',component:()=>import("../components/Add.vue"),meta: {title:'添加'}
    },
    {
      path: '/detail/:bid',component:()=>import("../components/Detail.vue"), name: 'detail',meta: {title:'详情'}
    }, //设置路径参数
    {
      path: '/list',component:()=>import("../components/List.vue"),meta:{title:'列表'}
    },
    {
      path: '*', redirect: '/home'
    },
  ]
})
