<template>
  <div>
    <main-navigation/>
    <router-view/>
  </div>
</template>


<script>
import Nav from './navigation/Navigation.vue';
import Notifications from './notifications/Notifications.vue';

export default {
  name: 'user',
  components: {
    'main-navigation': Nav,
    'notification-area': Notifications
  },
  data: function(){
    return {

    }
  }
};

</script>



<style lang="scss" scoped>


</style>
