import Vue from 'vue';
import Vuex from 'vuex';
import test from './modules/test';
import user from './modules/user';
import company from './modules/company';
import employee from './modules/employee';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		test,
		user,
		company,
		employee
	}
})