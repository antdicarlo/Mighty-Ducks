import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NotFoundComponent from '@/components/NotFoundComponent'
import zombie from '@/components/zombie'
//import Register from '@/components/Register'



Vue.use(Router)

export default new Router({
	  mode: 'history', 
  routes: [
  
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    } ,
        
    {
      path: '/zombie',
      name: 'zombie',
      component: zombie
    } ,
  
     { path: '*', component: NotFoundComponent }
  ]
})
