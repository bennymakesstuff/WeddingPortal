<template>
  <div class="application">
    <h1>Dashboard</h1>

    <!--<system-alert color="#9c1a1a" title="System Announcement"/>-->

    <widget size="narrow" color="#bd2ccf"/>
    <widget size="standard" color="#cf932c"/>
    <widget size="standard" color="#cf4e2c"/>
    <widget size="wide" color="#2d8bcf"/>
    <widget size="narrow" color="#cf4e2c"/>
  </div>
</template>


<script>
import Widget from '../../../ui/widget.vue';
import SysAlert from '../../../ui/system-alert.vue';

export default {
  name: 'dashboard',
  components: {
    'widget': Widget,
    'system-alert':SysAlert
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
}
</style>
