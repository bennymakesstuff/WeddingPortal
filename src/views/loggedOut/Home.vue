<template>
  <div class="home">
    <ben-button v-bind:buttonContent="buttonContent"></ben-button>
    <ben-button v-bind:buttonContent="buttonContent2"></ben-button>
<h1>External facing Home Page</h1>
  </div>
</template>

<script>
import Button from '../../ui/button.vue';

export default {
  name: "Home",
  components: {
    'ben-button':Button
  },
  data: function(){
    return {
      buttonContent: {content: "Login",
                id: 'defaultButton',
                size: 'medium',
                type: '',
                shadow: 'low',
                location: 'user_dashboard'},
      buttonContent2: {content: "Login",
                id: 'defaultButton',
                size: 'medium',
                type: '',
                shadow: 'low',
                location: 'admin_dashboard'}
            }
  },
};
</script>
