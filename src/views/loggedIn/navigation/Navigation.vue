<template>
  <div class="main-navigation">

    <div class="app-logo">
      <icon-base slot="pane-icon" width="180px" height="50px" viewBox="0 0 180 50"><icon-bellhop/></icon-base>
    </div>

    <div class="user-card" v-on:click="navigateTo('user_account')">
      <div class="image"></div>
      <div class="name">{{ user.firstname }} {{ user.surname }}</div>
    </div>

    <div v-for="item in menu_items" class="menu-item" v-on:click="navigateTo(item.link)">
      <div class="icon">
        <icon-base slot="pane-icon" width="30px" height="30px"><component v-bind:is="item.icon"/></icon-base>
      </div>
      <div class="title">
        {{ item.title }}
      </div>
    </div>

  </div>
</template>


<script>
import IconBase from '../../../ui/icons/icon-base.vue';
import IconBellhop from '../../../ui/icons/icon-bellhop.vue';
import IconDashboard from '../../../ui/icons/icon-dashboard.vue';
import IconBookings from '../../../ui/icons/icon-calendar.vue';
import IconMarketing from '../../../ui/icons/icon-marketing.vue';
import IconPayments from '../../../ui/icons/icon-payments.vue';
import IconClaims from '../../../ui/icons/icon-claims.vue';
import IconSupport from '../../../ui/icons/icon-support.vue';
import IconProperty from '../../../ui/icons/icon-property.vue';
import IconPersonFill from '../../../ui/icons/icon-person-fill.vue';
import IconTeam from '../../../ui/icons/icon-team.vue';
import IconBank from '../../../ui/icons/icon-bank.vue';
import IconIdea from '../../../ui/icons/icon-idea.vue';

export default {
  name: 'main-navigation',
  components: {
    'icon-base':IconBase,
    'icon-bellhop':IconBellhop,
    'icon-dashboard':IconDashboard,
    'icon-claims':IconClaims,
    'icon-support':IconSupport,
    'icon-payments':IconPayments,
    'icon-marketing':IconMarketing,
    'icon-bookings':IconBookings,
    'icon-property':IconProperty,
    'icon-person-fill':IconPersonFill,
    'icon-team':IconTeam,
    'icon-bank':IconBank,
    'icon-idea':IconIdea,
  },
  data: function(){
    return {
      user: {firstname: 'Chelsea', surname: 'Turner'},
      menu_items: [
        {id: 1, position: 1, title: 'Dashboard', link: 'user_dashboard', icon: 'icon-dashboard', active: true},
        {id: 2, position: 2, title: 'Properties', link: 'user_properties', icon: 'icon-property', active: true},
        {id: 3, position: 3, title: 'Bookings', link: 'user_bookings', icon: 'icon-bookings', active: true},
        {id: 4, position: 4, title: 'My Bank', link: 'user_banking', icon: 'icon-bank', active: true},
        {id: 6, position: 6, title: 'My Team', link: 'user_team', icon: 'icon-team', active: true},
        {id: 6, position: 6, title: 'Support / FAQ', link: 'user_support', icon: 'icon-support', active: true},
        {id: 6, position: 6, title: 'Ideas / Feedback', link: 'user_ideas', icon: 'icon-idea', active: true},
      ]
    }
  },
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
                  padding: 0;
                  margin: 0;

    .menu-item {width: calc(100%);
                height: 50px;
                color: #eee;
                font-size: 0;
                cursor: pointer;
                //border-bottom: 1px solid #1a1818;
                border-bottom: 1px solid #273038;

        .icon {width: 30px;
              height: 30px;
              background-color: transparent;
              opacity: 1;
              border-radius: 0.15rem;
              margin: 10px 10px;
              display: inline-block;
              vertical-align: top;}

        .title {width: calc(100% - 50px);
                font-size: 0.8rem;
                padding: 0px 10px;
                padding-left: 0;
                line-height: 52px;
                text-align: left;
                color: #eee;
                font-weight: 300;
                display: inline-block;
                vertical-align: top;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;}

              }

    .menu-item:hover {background-color: rgba(#eeeeee, 0.05);}

.user-card {width: calc(100%);
            height: 80px;
            color: #eee;
            font-size: 0;
            line-height: 80px;
            cursor: pointer;
          //border-bottom: 1px solid #393737;
            //border-top: 1px solid #393737;
            border-bottom: 1px solid #273038;
            border-top: 1px solid #273038;
            margin-bottom: 10px;

    .image {width: 60px;
          height: 60px;
          background-color: white;
          opacity: 0.5;
          border-radius: 30px;
          margin: 5px 10px;
          display: inline-block;
          vertical-align: middle;}

    .name {width: calc(100% - 90px);
            font-size: 0.8rem;
            height: 80px;
            background-color: transparent;
            padding: 0px 10px;
            padding-left: 0;
            line-height: 85px;
            text-align: left;
            color: #eee;
            font-weight: 300;
            display: inline-block;
            vertical-align: middle;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;}

          }
}
.user-card:hover {background-color: rgba(#eeeeee, 0.05);}

.app-logo {width: calc(100%);
            height: 60px;
            color: #eee;
            font-size: 1.5rem;
            line-height: 60px;
            font-weight: 600;
            color: #eee;
            margin-top: 1rem;
          }
</style>
