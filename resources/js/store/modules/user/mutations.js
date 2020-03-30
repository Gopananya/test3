export default {
	SET_USER(state, user){
		state.currentUser = user;
	},
	setToken(state, token){
		state.jwt_token = token;
	},
	login(state){
		state.isAuth = true;
	}
}
	