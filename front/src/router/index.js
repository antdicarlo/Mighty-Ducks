import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NotFoundComponent from '@/components/NotFoundComponent'
import Login from '@/components/Login'
//import Register from '@/components/Register'

import RequireAuth from '@/requireAuth'




Vue.use(Router)

export default new Router({
	  mode: 'history', 
  routes: [
  
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      beforeEnter: RequireAuth
    } ,
    {
      path: '/',
      name: 'Login',
      component: Login,

    } ,
     { path: '*', component: NotFoundComponent }
  ]
})
