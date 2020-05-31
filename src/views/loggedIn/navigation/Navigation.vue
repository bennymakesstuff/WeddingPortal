<template>
  <div class="main-navigation">

    <div class="menu-item" v-on:click="navigateTo('user_dashboard')">Dashboard</div>
    <div class="menu-item" v-on:click="navigateTo('user_account')">My Account</div>

  </div>
</template>


<script>
export default {
  name: 'main-navigation',
  methods: {
    navigateTo: function(location){
        this.$router.push({name: location})
          .catch(function(error){
            console.log("Already at this location. Navigation Ignored.")
          });
    }
  }
}
</script>

<style lang="scss" scoped>
.main-navigation {font-size: 0.8rem;
                  color: #333333;
                  position: absolute;
                  width: 100%;

    .menu-item {width: calc(100% - 0.5rem);
                height: 30px;
                padding: 0.25rem;
                color: #eee;
                font-size: 0.8rem;
                cursor: pointer;}

    a {color: #ffffff;}
      }
</style>
