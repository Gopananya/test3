import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';



Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: Home
	},
	{
        path: '/auth/:provider/callback',
        component: {
            template: '<div class="auth-component"></div>'
        }
    },
	
]

export const router = new VueRouter({
	routes,
	mode: 'history'
})
