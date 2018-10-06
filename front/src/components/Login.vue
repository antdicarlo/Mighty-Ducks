<template>
	<div class="blank">
   <br> Login <input v-model="username" type="text"></input>
   <br> Password <input v-model="password" type="text"></input>

    <button @click="login">Login</button>
  </div>
</template>

<script>

  import { mapState } from 'vuex'
  export default {

    data () {
      return {
        username:null,
        password:null ,

        user: {
          authenticated: false,
          profile: null
        }

      }
    } ,
    computed: mapState(['authError', 'authenticated']),
    watch: {
      authenticated() {

      }
    } ,
    methods : {
      login : function() {
        
        this.$store.dispatch({
          type: 'signin',
          username: this.username,
          password: this.password
        }).then(() => { this.$router.push('/HelloWorld')})
      }

    },
    mounted () {

    }
  }
</script>
<style scoped>

</style>