<template>
  <div class="login">
    <h1>Accomodation</h1>
  </div>
</template>

<script>
export default {
  name: "register",
  components: {
  },
  data: function(){
    return {
      userInfo: {
        givenname: '',
        password: '',
        email: '',
        mobile: '',
        surname: '',
      }
    }
  },
  methods: {
    login: function(){
      this.$store.dispatch('login',{'username':this.userInfo.username,'password':this.userInfo.password});
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../../ui/styles/colors.scss';
@import '../../ui/styles/breakpoints.scss';
@import '../../ui/styles/globals.scss';

.login_area {height: calc(100vh - (#{$mainMenuHeight} * 2));
            width: 30rem;
            background-color: $edibundleGreen;
            margin-left: auto;
            margin-right: auto;
            line-height: calc(100vh - #{$mainMenuHeight});

      .login_box {line-height: 1rem;
                  display: inline-block;
                  padding: 1.5rem 0.5rem;
                  vertical-align: middle;
                  height: 25rem;
                  width: 20rem;
                  border: 1px solid #aeaeae;
                  border-radius: 0.7rem;
                  background-color: transparent;

      .input_area {margin-top: 2rem;

        .field {width: calc(100% - 2rem);
                margin: 0.5rem 1rem;
                height: auto;
                position: relative;
                min-height: 2.5rem;
                background-color: rgb(246, 246, 246);
                border-radius: 0.3rem;
                box-shadow: 0px 1px 1px rgba(63, 102, 57, 0.77);

          .label {position: absolute;
                  top: 0.85rem;
                  left: 0.5rem;
                  font-size: 1rem;
                  font-weight: 100;
                  transition: top 250ms ease, top 250ms ease, top 250ms ease;
                  pointer-events: none;}


          input[type='text'],input[type='password'] {position: absolute;
                top: 0;
                left: 0;
                font-size: 1rem;
                width: calc(100% - 1rem);
                padding: 0rem 0.5rem;
                height: 2.8rem;
                background-color: transparent;
                font-family: 'Quicksand', sans-serif;
                font-weight: 500;
                border: 0;
                outline: 0;
              }
            input:not(:placeholder-shown) + .label{
                top: 0rem;
                left: 0.5rem;
                font-size: 0.6rem;
                font-weight: 100;
            }
            }
            .field:focus-within {border: 1px solid $edibundleGreen;}
            .field:focus-within > .label {top: 0rem;
                                          left: 0.5rem;
                                          font-size: 0.6rem;
                                          font-weight: 100;}


            .half {width: calc(50% - 1rem);
                  margin-left: 0.5rem;
                  margin-right: 0.5rem;
                  display: inline-block;
                  vertical-align: top;}

            .quarter {width: calc(25% - 1rem);
                  margin-left: 0.5rem;
                  margin-right: 0.5rem;
                  display: inline-block;
                  vertical-align: top;}
          }
        }
      }

h2 {font-size: 1.7rem;
    color: $edibundleGreen;}
h1 {font-size: 2rem;}

</style>
