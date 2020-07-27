<template>
  <div class="home">
    <div class="hero">
      <div class="hero_inner">
        <div class="title_area">
            <iframe id="ytplayer" class="ytframe" type="text/html" width="auto" height="100vh"
  src="https://www.youtube.com/embed/647ikNd3jSI?autoplay=1&origin=http://example.com"
  frameborder="0"></iframe>
        </div>
        <div class="signup_area">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
  },
  data: function(){
    return {}
  },
};
</script>
<style lang="scss" scoped>
@import '../../ui/styles/colors.scss';
@import '../../ui/styles/breakpoints.scss';
@import '../../ui/styles/globals.scss';

.hero {height: 100vh;
      width: 100%;
      background-color: transparent;
      border-bottom: 1px solid #e0e0e0;
      line-height: 1rem;
      min-height: 20rem;
      height: auto;
      margin-top: 0.5rem;
      position: relative;
      text-align: center;
      font-size: 0;

      .hero_inner {width: 100%;
                    border: transparent;
                    height: 100%;
                    display: inline-block;
                    margin-left: auto;
                    margin-right: auto;
                    padding-top: 2rem;
                    background-color: transparent;

                    @include respond-to('medium'){
                      width: 50rem;
                    }

                    .title_area {width: 100vw;
                                height: 100vh;

                                font-size: 0;
                                position: relative;
                                background-color: transparent;

                        .ytframe {width: 100%;
                                  height: 100vh;}

                                h1 {font-size: 5.8rem;
                                  line-height: 5.8rem;
                                    font-weight: 400;
                                    margin: 0;
                                    padding: 0;
                                    color: #536650;
                                    font-family: 'Covered By Your Grace', cursive;
                                    text-shadow: 0px 1px 5px $heroTextShadow;}

                    }
                    .signup_area {
                      font-family: 'Quicksand', sans-serif;
                      border: 0;
                      min-height: 10rem;
                      width: calc(100% - 4rem);
                      padding: 2rem;
                      display: inline-block;
                      margin-left: auto;
                      margin-right: auto;
                      margin-top: 2rem;

                      .start-account-area {border: 0;
                      min-height: 5rem;
                      margin-top: 0.5rem;
                      width: calc(100%);
                      padding: 0.5rem 2rem;
                      display: inline-block;
                      margin-left: auto;
                      margin-right: auto;

                      button {padding: 0.5rem 1.5rem;
                              margin-top: 0.5rem;
                              font-size: 1.1rem;
                              color: #ffffff;
                              //background-color: $bottomMenuBackground;
                              background-color: $edibundleGreen;
                              border: 0;
                              border-radius: 0.3rem;
                              font-weight: 300;
                              cursor: pointer;
                              outline: none;
                              box-shadow: 0px 1px 1px rgba(63, 102, 57, 0.77);
                              transition: box-shadow 150ms ease;}

                      button:hover {box-shadow: 1px 1px 3px rgba(45, 78, 40, 1);}

                      .social {display: inline-block;
                              margin-top: 1rem;
                              margin-left: 0.3rem;
                              margin-right: 0.3rem;}

                      .facebook {background-color: #304b94; font-weight: 400; font-size: 0.9rem;}
                      .google {background-color: #c94131;font-weight: 400; font-size: 0.9rem;}

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

                                h2 {color: #ffffff;
                                    font-size: 1.3rem;
                                    margin-top: 1rem;
                                    }
                    }

                      h2 {color: #ffffff;
                          font-size: 1.5rem;
                          margin-top: 0rem;

                          }
                    }


                  }
    }



</style>
