<template>
  <div class="metric-content">
    <div class="large-metric">
      $ 1,803.00
    </div>
  </div>
</template>


<script>
export default {
  name: 'bdu_visits_today',
  components: {

  },
  data: function(){
    return {

    }
  },
};

</script>

<style lang="scss" scoped>
.metric-content {position: relative;
                width: 100%;
                height: auto;
                min-height: 30px;

  .large-metric {font-size: 2.2rem;
                text-align: right;
                position: absolute;
                top: -10px;
                right: 0px;
                color: #5a5a5a;
              }
}
</style>
