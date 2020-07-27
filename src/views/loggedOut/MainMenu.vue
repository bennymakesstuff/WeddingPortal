<template>
  <div class="menu">
    <div :class="[mobileMenuBackground,'mobileMenuBackground']" @click="closeMenu()"></div>
    <div :class="[mobileMenuClass,'mobile-menu']">
      <div class="mobile-menu-title wedding_icon_text"></div>
      <router-link :to="{ name: 'home'}" class="mobile-menu-item" @click.native="closeMenu()">Home</router-link>
      <router-link :to="{ name: 'details'}" class="mobile-menu-item" @click.native="closeMenu()">Details</router-link>
      <router-link :to="{ name: 'accomodation'}" v-if="!userLoggedIn" class="mobile-menu-item" @click.native="closeMenu()">Accomodation</router-link>
      <router-link v-if="userLoggedIn" @click="logout" class="mobile-menu-item" @click.native="closeMenu()">Logout</router-link>
    </div>
    <div v-if="showBenChelsIcon == true" class="logo_area wedding_icon"></div>
    <div  v-if="showBenChelsIcon == false" class="logo_area">November 2021</div>
    <div class="button_area">
      <div class="large_menu">
        <router-link v-if="!userLoggedIn" :to="{ name: 'home'}" class="menu_item">Home</router-link>
        <router-link v-if="!userLoggedIn" :to="{ name: 'details'}" class="menu_item">Details</router-link>
        <router-link :to="{ name: 'accomodation'}" v-if="!userLoggedIn" class="menu_item">Accomodation</router-link>
        <div v-if="userLoggedIn" @click="logout" class="menu_item">Logout</div>
      </div>
      <button class="menu_trigger" @click="openMenu()">
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
        </icon-base>title
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
      buttonContent: {content: "Wedding Party Login",
                id: 'defaultButton',
                size: 'medium',
                type: '',
                icon: true,
                shadow: 'low',
                location: 'login'},
        mobileMenu: {status:false},
        showBenChelsIcon: false,
  }
},
watch: {
    $route(to, from) {
      if(to.name!='home'){
        this.showBenChelsIcon=true;
      }
      else{
        this.showBenChelsIcon=false;
      }
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
    mobileMenuClass: function(){
      if(this.mobileMenu.status==true){
        return 'mm-open';
      }
      else{
        return 'mm-closed';
      }
    },
    mobileMenuBackground: function(){
      if(this.mobileMenu.status==true){
        return 'mb-open';
      }
      else{
        return 'mb-closed';
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
    },
    closeMenu: function(){
      this.mobileMenu.status = false;
    },
    openMenu: function(){
      this.mobileMenu.status = true;
    },
  }
};
</script>
<style lang="scss" scoped>
@import '../../ui/styles/colors.scss';
@import '../../ui/styles/breakpoints.scss';
@import '../../ui/styles/globals.scss';

.menu {height: $mainMenuHeight;
      width: 100%;
      background-color: $menuBackgroundColor;
      background: #ffffff url('../../assets/paper3.jpg') repeat;
      background-size: 30% 100%;
      color: #dddddd;
      position: fixed;
      z-index: 100;
      top: 0;
      //box-shadow: 0px 0px 5px #d0d0d0;

.mb-open {display: block;}
.mb-closed {display: none;}

.mm-open {left: 0rem;}
.mm-closed {left: -21rem;}

.mobileMenuBackground {position: fixed;
                      top: 0;
                      left: 0;
                      opacity: 0.3;
                      height: 100vh;
                      width: 100vw;
                      background-color: #333333;



                      @include respond-to('large'){
                        display: none !important;
                      }
                    }

.mobile-menu {position: fixed;
              top: 0;
              width: 20rem;
              z-index: 101;
              box-shadow: 0 0 10px #333333;
              background-color: #e6e3d6;
              height: 100vh;
              transition: left 200ms ease;

              @include respond-to('large'){
                display: none !important;
              }

  .mobile-menu-title {padding: 1rem;
                    border-bottom: 1px solid $edibundleGreen;
                    color: $edibundleGreen;
                    display: block;
                    width: calc(100% - 0rem);
                    height: 6rem;
                    font-size: 1.2rem;
                    line-height: 2rem;
                    font-weight: 500;}

              .mobile-menu-item {padding: 1rem;
                                border-bottom: 1px solid $edibundleGreen;
                                color: $edibundleGreen;
                                display: block;
                                width: calc(100% - 0rem);
                                height: auto;
                                font-size: 1.2rem;
                                line-height: 2rem;
                .icon {}
                .text {}
              }
            }

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
                  font-size: 1.2rem;
                  color: $edibundleGreen;

          @include respond-to('small'){

          }
          @include respond-to('medium'){

          }
          @include respond-to('large'){

          }

                }

      .wedding_icon {width: 300px;
                    height: 5rem;
                    background: transparent url(../../assets/wedding_logo_small.png) no-repeat;
                    background-size: contain;
                    background-position: left;}

    .wedding_icon_text {
                  background: transparent url(../../assets/wedding_logo_text.png) no-repeat;
                  background-size: 60%;
                  background-position: center;

                  }

    }

h1 {font-size: 2rem;}

</style>
