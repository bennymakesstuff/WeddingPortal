<template>
  <div class="home">
    <div class="hero">
      <div class="hero_inner">

        <h1>When...</h1>
        <h2>November xx 2021</h2>

        <h2>Ceremony</h2>
        <h3>Starts at 11:15 AM</h3>

        <h2>Reception</h2>
        <h3>Starts at 2:30 PM</h3>

        <h2>Extra Curricular Activities</h2>
        <h3>Continue till the AM</h3>


        <h1>Where</h1>
        <h2></h2>
        <h3>This location is a little out of the way located 10 Minutes from Birdwood.</h3>
        <br>
        <h3>Use the below button for directions on your phone.</h3>
        <ben-button class="ben-button" v-bind:buttonContent="buttonContent">
          <icon-base slot="button-icon" height="0.8rem" width="0.8rem">
            <user-icon/>
          </icon-base>
        </ben-button>
      </div>
    </div>
  </div>
</template>

<script>

import Button from '../../ui/button.vue';
import UserIcon from '../../ui/icons/icon-person-fill.vue';
import IconBase from '../../ui/icons/icon-base.vue';

export default {
  name: "Details",
  components: {
    'ben-button':Button,
    'user-icon':UserIcon,
    'icon-base':IconBase
  },
  data: function(){
    return {
      buttonContent: {content: "Get Directions",
                id: 'defaultButton',
                size: 'medium',
                type: '',
                icon: true,
                isURL: true,
                shadow: 'low',
                location: 'https://www.google.com.au/maps/place/Barrenjoey+Hideaway/@-34.8089182,138.9267041,18z/data=!4m8!3m7!1s0x6ab75b66b410cb0b:0xa1f44aba116c695b!5m2!4m1!1i2!8m2!3d-34.8087225!4d138.9264359'},
              }
  },
};
</script>
<style lang="scss" scoped>
@import '../../ui/styles/colors.scss';
@import '../../ui/styles/breakpoints.scss';
@import '../../ui/styles/globals.scss';

.ben-button {margin-top: 1rem;
            margin-bottom: 1rem;}

.hero {min-height: 20rem;
      width: 100%;
      background-color: transparent;
      border-bottom: 1px solid #e0e0e0;
      line-height: 1rem;
      min-height: 20rem;
      height: auto;
      position: relative;
      text-align: center;
      font-size: 0;

      .hero_inner {width: 100%;
                    padding: 1rem;
                    border: transparent;
                    height: 100%;
                    display: inline-block;
                    margin-left: auto;
                    margin-right: auto;
                    padding-top: 4rem;
                    text-align: left;

                    @include respond-to('medium'){
                      width: 50rem;
                    }

                    h1 {font-size: 3rem;
                        color: $edibundleGreen;
                        line-height: 3rem;
                        margin-top: 1.5rem;}

                    h1:first-child {margin-top: 0;}

                    h2 {font-size: 1.5rem;
                        color: $edibundleGreen;
                        line-height: 1.5rem;
                        margin-top: 1rem;
                        font-weight: 500;}

                    // h2:first-child {margin: 0;}

                    h3 {font-size: 1.2rem;
                        line-height: 1.2rem;
                        color: $edibundleGreen;}
        }
    }



</style>
