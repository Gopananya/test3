export default {
	currentUser: JSON.parse(localStorage.getItem('user')),
	jwt_token: localStorage.getItem('token'),
	isAuth: JSON.parse(localStorage.getItem('isAuth'))
}