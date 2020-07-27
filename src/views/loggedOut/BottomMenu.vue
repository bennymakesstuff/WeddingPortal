<template>
  <div class="bottom_menu">

  </div>
</template>

<script>
export default {
  name: "BottomMenu",
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

.bottom_menu {min-height: 10rem;
      width: 100vw;
      background-color: $bottomMenuBackground;
      color: #ffffff;
      position: relative;
      box-shadow: 0px 0px 5px #d0d0d0;
      position: absolute;
      bottom: 0;
      left: 0;

      @include respond-to('medium'){
        left: $menu_width;
        width: calc(100vw - #{$menu_width});
      }
}

</style>
