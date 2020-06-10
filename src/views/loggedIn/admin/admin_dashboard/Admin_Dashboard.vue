<template>
  <div class="application">
    <h1>Admin Dashboard</h1>

    <!--<system-alert color="#9c1a1a" title="System Announcement"/>-->

    <widget size="narrow" color="#286fb8" title="BDU Page Visits">
      <icon-base slot="widget-icon" width="40px" height="40px"><today-icon/></icon-base>
      <!-- <bdu-visits-today slot="widget-content"/> -->
    </widget>

    <widget size="narrow" color="" title="Directory Visits">
      <!-- <directory-visits-today slot="widget-content"/> -->
    </widget>

    <widget size="narrow" color="" title="Bookings Today">
    <!--  <bookings-today slot="widget-content"/> -->
    </widget>

    <widget size="standard" color="" title="New Bookings Today"/>
    <widget size="standard" color="#cf932c" title="Today's Due Checkins"/>
    <widget size="narrow" color="#cf4e2c"/>
  </div>
</template>


<script>
import Widget from '../../../../ui/widget.vue';
import SysAlert from '../../../../ui/system-alert.vue';

//Icons
import BaseIcon from '../../../../ui/icons/icon-base.vue';
import IconCalendarToday from '../../../../ui/icons/icon-today-calendar.vue';


export default {
  name: 'admin_dashboard',
  components: {
    'widget': Widget,
    'system-alert':SysAlert,
    'icon-base':BaseIcon,
    'today-icon':IconCalendarToday
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
