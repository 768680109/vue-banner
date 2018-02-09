import Lunbo from 'lunbo.vue'

const Lunbo = {
	install:function(Vue){
		Vue.component('Lunbo',Lunbo)
	}
}

export default Lunbo



/*在main.js如下调用可调用全局Lunbo*/
/*
import Lunbo from './components/lunbo/Lunbo.vue'
Vue.use(Lunbo);
*/
