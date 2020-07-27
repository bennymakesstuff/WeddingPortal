<template>
  <div class="application">
    <h1>New Order</h1>
    <h2>Start adding items to create a new order.</h2>
    <h2>If you wish to you can give the order a familiar name and purchase order number for later re-order, reference or subscription.</h2>
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
