<template>
  <div class="home">
    <div class="hero">
      <div class="hero_inner">
        <h1>About Page</h1>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
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

.hero {min-height: 20rem;
      width: 100%;
      background-color: #ffffff;
      border-bottom: 1px solid #e0e0e0;
      background: #96ad8c url('../../assets/bg5.png') repeat;
      line-height: 1rem;
      min-height: 20rem;
      height: auto;
      position: relative;
      text-align: center;
      font-size: 0;

      .hero_inner {width: 100%;
                    border: transparent;
                    height: 100%;
                    display: inline-block;
                    margin-left: auto;
                    margin-right: auto;
                    padding-top: 4rem;

                    @include respond-to('medium'){
                      width: 50rem;
                    }

                    h1 {font-size: 3rem;
                        color: #ffffff;}
        }
    }



</style>
