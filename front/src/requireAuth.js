import Vue from 'vue'
import axios from 'axios'

import store from '@/store'

export default (to, from, next) => {
	// verify token ;)
	axios
		.get('/api/user/verify', { headers: { auth: localStorage.id_token } })
		.then(res => {

			// user is auth :)
			store.commit('AuthUser')
			next();

		
		
		})
		.catch(err => {
			// send user to login page :(
			console.log(err);
			next('Login')
		})
}



function parseJwt (token) {
	var base64Url = token.split('.')[1];
	var base64 = base64Url.replace('-', '+').replace('_', '/');
	return JSON.parse(window.atob(base64));
};
