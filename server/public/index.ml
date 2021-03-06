<!doctype HTML>
<html>
<head>
    <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
</head>
<script src="https://aframe.io/releases/0.8.0/aframe.min.js"></script>
<script src="https://rawgit.com/jeromeetienne/AR.js/master/aframe/build/aframe-ar.min.js"></script>

<!-- import events.js script -->

<script type="text/javascript">


    </script>
<body style='margin : 0px; overflow: hidden;'>

  <a-scene  embedded artoolkit='sourceType: webcam; sourceWidth: 240; sourceHeight: 180;' antialias="true" outline>
      <!--a-assets>
        <a-asset-item id="mymodel" src="static/busterDrone.gltf"></a-asset-item>
    </a-assets-->
    <a-box color="green"></a-box>

    <a-assets>
    <a-asset-item id="tree" src="static/venom.gltf"></a-asset-item>
</a-assets>
<!-- use your gltf model -->
<a-entity id="myEnt" gltf-model="#tree"></a-entity>


    <a-marker preset="hiro" >
      <a-entity  scale="5.03 5.03 5.03" gltf-model="#tree"></a-entity>
    </a-marker>

</a-scene>
<button class="button" onclick="setPosition()">Reposition</button>
<script type="text/javascript">
   function setPosition() {
   
     var sceneEl = document.querySelector('#myEnt');
        sceneEl.setAttribute('position', {x: 150, y: 25,  z: 150} );
    }
</script>
<style>
    .button {
    
  bottom:30px;
  position: absolute;
  z-index:999 ;
 
    }
</style>
</body>
</html>