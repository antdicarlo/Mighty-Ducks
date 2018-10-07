<template>
   <a-scene embedded>
    <a-sky color="#000"></a-sky>
      <a-entity camera look-controls wasd-controls position="0 1 3" rotation="-15 0 0"></a-entity>
      <a-box color="blue" opacity="0.75" visible="true"></a-box>
      <a-marker-camera preset='hiro'></a-marker-camera>    

  </a-scene>
</template>

<script>
import 'aframe'

</script>

<style scoped>
</style>

<script>
import 'aframe'
export default {

    name: 'HelloWorld',
  data () {
    return {
        msg: 'Welcome to Your Vue.js App test'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
