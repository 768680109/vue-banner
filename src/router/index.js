import Vue from 'vue'
import Router from 'vue-router'

/*----------------------------------*/
const Index = resolve => require(['@/views/index'],resolve);

const Lunbo = resolve => require(['@/components/lunbo'], resolve);
/*----------------------------------*/
Vue.use(Router)

export default new Router({
		routes: [{
			path: '/',
			name: 'Lunbo',
			component: Lunbo,
		},
		
	]
})
