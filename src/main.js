// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/common.css'

/*引入Progress 进度条*/
import NProgress from 'nprogress' 
import 'nprogress/nprogress.css' 



Vue.config.productionTip = true



router.beforeEach((to,from,next)=>{
	NProgress.start(); // 开启Progress
	next()
})

router.afterEach(() => {
  NProgress.done(); // 结束Progress
});


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
