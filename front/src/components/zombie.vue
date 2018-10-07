<template>
  <div class="hello">

    <h2>Zombie Test </h2>
	<button @click="testAlert">Click me</button>
  </div>
</template>

<script>
export default {

    name: 'HelloWorld',
  data () {
    return {
        msg: 'Welcome to Your Vue.js App'
    }
  },
  methods : {
    testAlert () {
        alert('test'); 
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
