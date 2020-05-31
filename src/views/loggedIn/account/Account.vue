<template>
  <div class="application">
    <h1>My Account</h1>
    <p>Make changes to your account.</p>
    <pane size="full" title="Personal Details" color="#787878"/>
    <pane size="full" title="Security" color="#787878"/>
  </div>
</template>


<script>
import Pane from '../../../ui/pane.vue';

export default {
  name: 'account',
  components: {
    'pane':Pane
  },
  data: function(){
    return {

    }
  },
};

</script>

<style lang="scss" scoped>
.application {font-size: 0.8rem;
              height: auto;
              text-align: left;
              padding: 1rem;

  h1 {font-size: 1.5rem;
      margin: 0;}
}
</style>
