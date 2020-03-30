import userService from '../../services/userService'
import {router} from '../../router'

export default {
	state: {
		currentUser: JSON.parse(localStorage.getItem('user')),
		jwt_token: localStorage.getItem('token'),
		isAuth: JSON.parse(localStorage.getItem('isAuth'))
	},
	getters: {
		getUser(state){
			return state.currentUser;
		},
		getToken(state){
			return state.jwt_token;
		},
		isLoggedIn(state){
			return state.isAuth;
		}
	},
	mutations: {
		SET_USER(state, user){
			state.currentUser = user;
		},
		setToken(state, token){
			state.jwt_token = token;
		},
		login(state){
			state.isAuth = true;
		}
	},
	actions: {
		login(ctx, data) {
			return new Promise((response, rej) => {
				userService.login(data).then(res => {
					ctx.commit('SET_USER', JSON.parse(localStorage.getItem('user')));
					ctx.commit('setToken', localStorage.getItem('token'));
					ctx.commit('login');
					// console.log(res)
					// response(res);
					router.push('/home');
					// router.go('/home');
				}).catch(err => {
					console.log('error ',err);
					rej(err)
				})
			})
		}
		,
		logout(ctx) {
			userService.logout();
			ctx.commit('setUser', null);
			ctx.commit('setToken', null);
			ctx.commit('login', false);
			router.go('/login');
		}
	}
}