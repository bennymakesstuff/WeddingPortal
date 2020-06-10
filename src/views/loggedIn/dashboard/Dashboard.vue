<template>
  <div class="application">
    <h1>Dashboard</h1>

    <!--<system-alert color="#9c1a1a" title="System Announcement"/>-->
    <div class="quickstats"></div>
    <div class="quicklinks">
      <h3>Quick Links</h3>
      <quicklink title="My Bank" color="#99c288">
        <icon-base slot="quicklink-icon" width="50px" height="50px">
          <today-icon/>
        </icon-base>
      </quicklink>

      <quicklink title="Property Details" color="#88afc2">
        <icon-base slot="quicklink-icon" width="50px" height="50px">
          <today-icon/>
        </icon-base>
      </quicklink>

      <quicklink title="Switch Property" color="#c288b7">
        <icon-base slot="quicklink-icon" width="50px" height="50px">
          <today-icon/>
        </icon-base>
      </quicklink>

      <quicklink title="Get Support" color="#bfc288">
        <icon-base slot="quicklink-icon" width="50px" height="50px">
          <today-icon/>
        </icon-base>
      </quicklink>
    </div>

    <widget size="narrow" color="#286fb8" title="BDU Page Visits">
      <icon-base slot="widget-icon" width="40px" height="40px"><today-icon/></icon-base>
      <bdu-visits-today slot="widget-content"/>
    </widget>

    <widget size="narrow" color="" title="Directory Visits">
      <directory-visits-today slot="widget-content"/>
    </widget>

    <widget size="narrow" color="" title="Bookings Today">
      <bookings-today slot="widget-content"/>
    </widget>

    <widget size="standard" color="" title="New Bookings Today"/>
    <widget size="standard" color="#cf932c" title="Today's Due Checkins"/>
    <widget size="narrow" color="#cf4e2c"/>
  </div>
</template>


<script>
import Widget from '../../../ui/widget.vue';
import Quicklink from '../../../ui/quicklink.vue';
import SysAlert from '../../../ui/system-alert.vue';

//Icons
import BaseIcon from '../../../ui/icons/icon-base.vue';
import IconCalendarToday from '../../../ui/icons/icon-today-calendar.vue';

//Widgets
import BDUVisitsToday from './BDU_Visits_Today.vue';
import DirectoryVisitsToday from './Directory_Visits_Today.vue';
import BookingsToday from './New_Bookings_Today.vue';

export default {
  name: 'dashboard',
  components: {
    'widget': Widget,
    'quicklink': Quicklink,
    'system-alert':SysAlert,
    'bdu-visits-today':BDUVisitsToday,
    'directory-visits-today':DirectoryVisitsToday,
    'bookings-today':BookingsToday,
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

.quicklinks {padding-bottom: 10px;
              padding-top: 5px;
            border-bottom: 1px solid #e3e3e3;}

  h1 {font-size: 1.5rem;}
  h3 {color: #8b8b8b;}
}
</style>
