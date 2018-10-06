import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
//https://github.com/ooade/vuex-examples/tree/auth


export default new Vuex.Store({
	state: {
		authenticated: false,
		authError: null,
		user:null,
		userId:null,
	},
	getters : {
		
	},
	mutations: {
		AuthUser(state, username) {
					state.authenticated = true
					state.authError = null

					var token = localStorage.getItem('id_token');
					var payload = parseJwt(token);
					state.user = payload.FirstName + " " + payload.Lastname ;
					state.accessLevel = payload.AccessLevel ; 
					state.userId = payload.UserImportId ;

			},
			AuthError(state, e) {
				state.authError = e
			},
			AuthLogout(state) {
				state.user = null ;
				state.authenticated = false;

			},
	},
	actions: {
		signin({ commit }, { username, password }) {
				return new Promise (( resolve, reject ) => {
					axios
					.post('/api/user/login', {
						username,
						password
					})
					.then(res => {
						saveToken(res.data.id_token,  commit)
						resolve(res)
					}
					)
					.catch(err  => {
						alert('Invalid Credentials');
						commit('AuthError', err)
						reject(err)
					})
				})
			},
			signout({commit}) {
			//localStorage
			localStorage.setItem('id_token', '')
			commit('AuthLogout');
		},
	}
})



function parseJwt (token) {
	var base64Url = token.split('.')[1];
	var base64 = base64Url.replace('-', '+').replace('_', '/');
	return JSON.parse(window.atob(base64));
};


function saveToken(token,  cb) {
	localStorage.setItem('id_token', token)
	// user is auth ^_^
	cb('AuthUser'  )
}