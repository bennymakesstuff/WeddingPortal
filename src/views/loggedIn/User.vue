<template>
  <div>
    <main-navigation id="main-navigation"/>
    <div id="view-content">
      <router-view/>
    </div>
  </div>
</template>


<script>
import Nav from './navigation/Navigation.vue';
import Notifications from './notifications/Notifications.vue';
import VueRouter from 'vue-router';

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

$menu_width: 220px;



#main-navigation {height: 100vh;
                  display: inline-block;
                  width: $menu_width;
                  vertical-align: top;
                  //background-color: #131517;
                  background-color: #2c363f;
                  color: #ffffff;
                  font-size: 0.8;
                  position: relative;}

#view-content {height: 100vh;
              min-height: 100vh;
                  display: inline-block;
                  width: calc(100vw - #{$menu_width});
                  vertical-align: top;
                  background-color: #eee;
                  color: #131517;
                  font-size: 0.8;
                  position: relative;
                  overflow-y: scroll;
                  overflow-x: hidden;}



</style>
