// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false;

//导入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 使用轮播图插件
Vue.use(VueAwesomeSwiper, /* { default global options } */)
import 'swiper/dist/css/swiper.css'

//图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=a4bd51959c510fb378197091e108afa8/96dda144ad345982f0c7fabe0ef431adcbef8448.jpg',
  loading: 'http://img.lanrentuku.com/img/allimg/1212/5-121204193935-51.gif',
  attempt: 1
});

//在进入路由之前 每一次都会执行此方法,全局钩子
router.beforeEach(function (to,from,next){ //to 前往的路由 ,from 来自哪个目录
  document.title = to.meta.title;
  next();
});

import  store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});


