import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
	routes:[
		{
			path:"/login",
			component: require('./components/auth/Login.vue'),
			meta: {
				forVisitors:true
			}
		},
		{
			path:"/register",
			component:  require('./components/auth/Register.vue'),
			meta: {
				forVisitors:true
			}
		},
		{
			path:"/feed",
			component:  require('./components/feed.vue'),
			meta: {
				forAuth:true
			}
		},
		{
			path:"/product/create",
			component: require('./components/product/Create.vue'),
			meta: {
				forAuth:true
			}
		}
	],
	linkActiveClass: 'active',
	mode: 'history'
})

export default router 