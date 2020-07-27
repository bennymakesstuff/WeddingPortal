<template>
  <div class="application">
    <h1>Your Subscriptions</h1>
    <h2>Here you can put orders on a set rotation and we will deliver them each Sunday.</h2>
    <h2>You can create a subscription from any old order or by creating a new one.</h2>
  </div>
</template>


<script>

export default {
  name: 'neworder',
  components: {
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
              color: #131517;

  h1 {font-size: 1.5rem;}
  h3 {color: #8b8b8b;}
}
</style>
