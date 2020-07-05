<template>
  <div class="application">
    <h1>Scans</h1>
    <div class="model_area">
      <model-obj backgroundColor="#eee" :controlOptions="controlOptions" :cameraPosition="cameraRotation" :rotation="rotation" :lights="lights" src="../ironman.obj"></model-obj>
    </div>
  </div>
</template>


<script>
import { ModelObj } from 'vue-3d-model';
export default {
  name: 'scans',
  components: {
    ModelObj
  },
  data: function(){
    return {
      controlOptions: {
          enablePan: false,
      },

      cameraRotation: {
        x:0,
        y:0,
        z:-400
      },
      rotation: {
                //x: -Math.PI / 2,
                x: 0,
                y: 0,
                z: 0

            },
      lights: [
        {color: 8413280,
          intensity: 2,
          position: {
            x:1,
            y:2,
            z:0
          },
        skyColor: 11184895,
        type: "DirectionalLight"},
        {color: 16777215,
          intensity: 1.5,
          position: {
            x:0,
            y:0,
            z:-2.5
          },
        type: "DirectionalLight"},
        {color: 16777215,
          intensity: 1.5,
          position: {
            x:0,
            y:0,
            z:1.5
          },
        type: "DirectionalLight"}
      ]
    }
  },
  methods: {
            onLoad () {
                this.rotate();
            },
            rotate () {
                this.rotation.y += 0.01;
                requestAnimationFrame( this.rotate );
            }
        },
};

</script>

<style lang="scss" scoped>
.application {font-size: 0.8rem;
              height: auto;
              text-align: left;
              padding: 1rem;
              color: #131517;

  .model_area {height: calc(100vh - 5rem);
              overflow: hidden;
              position: relative;}

  h1 {font-size: 1.5rem;}
  h3 {color: #8b8b8b;}
}
</style>
