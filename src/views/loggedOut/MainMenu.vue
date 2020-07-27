<template>
  <div class="menu">
    <div class="logo_area">Edibundle</div>
    <div class="button_area">
      <div class="large_menu">
        <router-link v-if="!userLoggedIn" :to="{ name: 'home'}" class="menu_item">Home</router-link>
        <router-link v-if="!userLoggedIn" :to="{ name: 'about'}" class="menu_item">About</router-link>
        <router-link :to="{ name: 'register'}" v-if="!userLoggedIn" class="menu_item">Sign Up</router-link>
        <router-link v-if="userLoggedIn && !userIsAdmin" :to="{ name: 'about'}" class="menu_item">Current Order</router-link>
        <div v-if="userLoggedIn" @click="logout" class="menu_item">Logout</div>
      </div>
      <button class="menu_trigger">
        <div class="icon">
          <div class="menu_bar"/>
          <div class="menu_bar"/>
          <div class="menu_bar"/>
        </div>
        <div class="text">Menu</div>
      </button>
      <ben-button v-if="!userLoggedIn" v-bind:buttonContent="buttonContent">
        <icon-base slot="button-icon" height="0.8rem" width="0.8rem">
          <user-icon/>
        </icon-base>
      </ben-button>
    </div>
  </div>
</template>

<script>
import Button from '../../ui/button.vue';
import UserIcon from '../../ui/icons/icon-person-fill.vue';
import IconBase from '../../ui/icons/icon-base.vue';

export default {
  name: "MainMenu",
  components: {
    'ben-button':Button,
    'user-icon':UserIcon,
    'icon-base':IconBase
  },
  data: function(){
    return {
      buttonContent: {content: "User Login",
                id: 'defaultButton',
                size: 'medium',
                type: '',
                icon: true,
                shadow: 'low',
                location: 'login'},
              }
  },
  computed: {
    userLoggedIn: function(){
      if(this.$store.state.user==null){
        return false;
      }
      else{
        return true;
      }
    },
    userIsAdmin: function(){
      if(this.$store.state.user.is_admin==true){
        return true;
      }
      else{
        return false;
      }
    }
  },
  methods: {
    logout: function(){
      this.$store.dispatch('logout');
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../../ui/styles/colors.scss';
@import '../../ui/styles/breakpoints.scss';
@import '../../ui/styles/globals.scss';

.menu {height: $mainMenuHeight;
      width: 100%;
      background-color: #ffffff;
      color: #dddddd;
      position: fixed;
      z-index: 100;
      top: 0;
      box-shadow: 0px 0px 5px #d0d0d0;

      .button_area {width: auto;
                  position: absolute;
                  top: 0.5rem;
                  right: 1rem;
                  height: 2rem;

                  @include respond-to('small'){
                    right: 1.3rem;
                  }

          .large_menu {width: auto;
                      display: none;
                      vertical-align: top;
                      margin-right: 0.5rem;

                      @include respond-to('small'){
                        display: none;
                      }
                      @include respond-to('medium'){
                        display: inline-block;
                      }

            .menu_item {color: $edibundleGreen;
                        height: 3rem;
                        line-height: 2.25rem;
                        font-size: 0.9rem;
                        padding: 0.5rem 1rem;
                        display: inline-block;
                        vertical-align: top;
                        cursor: pointer;
                        border-radius: 0.2rem;
                      }

            .menu_item:hover {background-color: $lightButtonHover;}
                  }

          .menu_trigger {border-radius: 0.15rem;
                     border: 0;
                     width: auto;
                     height: 2.5rem;
                     background-color: transparent;
                     border: 1px solid $edibundleGreen;
                     color: #f1f1f1;
                     font-size: 0.9rem;
                     cursor: pointer;
                     outline: none;

                     @include respond-to('small'){

                     }
                     @include respond-to('medium'){
                       display: none;
                     }

                     .icon {height: 1.2rem;
                           width: 1.5rem;
                           background-color: #ffffff;
                           margin: 0.15rem;
                           margin-top: 0.05rem;
                           background-color: transparent;
                           display: inline-block;
                           vertical-align: top;
                           position: relative;
                           pointer-events: none;

                        .menu_bar {height: 0.3rem;
                                  margin-bottom: 0.25rem;
                                  border-radius: 0.05rem;
                                  width: 100%;
                                  background-color: $edibundleGreen;
                                  pointer-events: none;}

                        .menu-bar:last-child {margin-bottom: 0;}
                         }

                    .text {height: 1.2rem;
                          width: auto;
                          line-height: 1.3rem;
                          font-size: 0.9rem;
                          background-color: transparent;
                          margin: 0.15rem;
                          display: none;
                          vertical-align: top;
                          position: relative;
                          color: $edibundleGreen;
                          pointer-events: none;

                          @include respond-to('small'){
                            display: inline-block;
                          }
                        }
                  }

                .menu_trigger:hover {background-color: $lightButtonHover;}
                }

      .logo_area {width: auto;
                  position: absolute;
                  top: 0.5rem;
                  left: 1rem;
                  height: 3.5rem;
                  line-height: 3.5rem;
                  font-size: 1.5rem;
                  color: $edibundleGreen;

          @include respond-to('small'){

          }
          @include respond-to('medium'){

          }
          @include respond-to('large'){

          }

                }

    }

h1 {font-size: 2rem;}

</style>
