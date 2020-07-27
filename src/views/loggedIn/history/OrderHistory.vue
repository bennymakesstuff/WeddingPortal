<template>
  <div class="application">
    <h1>Order History</h1>
    <h2>You can use these older orders to regenerate invoices, create subscriptions or re-order.</h2>
  </div>
</template>


<script>

export default {
  name: 'history',
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
