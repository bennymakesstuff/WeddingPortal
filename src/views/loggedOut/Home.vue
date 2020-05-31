<template>
  <div class="home">
    <b-button v-bind:buttonContent="buttonContent"></b-button>
    <b-button v-bind:buttonContent="buttonContent"></b-button>
<h1>External facing Home Page</h1>
  </div>
</template>

<script>
import Button from '../../ui/button.vue';

export default {
  name: "Home",
  components: {
    'b-button':Button
  },
  data: function(){
    return {
      buttonContent: {content: "Some Content",
                id: 'defaultButton',
                size: 'medium',
                type: '',
                shadow: 'low'}
            }
  }
};
</script>
