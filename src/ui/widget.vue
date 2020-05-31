<template>

  <div :class="['widget-container', size]">
    <div :class="['widget-inner','low-shadow', size]">
      <div class="widget-logo high-shadow" :style="iconStyle"/>
    </div>
  </div>

</template>

<script>

export default {
  name: "Widget",
  props: {
    size: {
      type: String,
      default: 'standard'
    },
    color: {
      type: String,
      default: '#606060'
    }
  },
  computed: {
    iconStyle: function(){
      var color = 'background-color:' + this.color + ';';
      return color;
    }
  },
  components: {},
  methods: {}
};
</script>

<style  lang="scss" scoped>
.widget-container {width: 300px;
                    height: auto;
                    display: inline-block;
                    vertical-align: top;
                    margin: 15px;
                    background-color: transparent;
                    //outline: 1px solid rgb(139, 139, 139);

      .widget-inner {width: 300px;
                    min-height: 200px;
                    margin-top: 20px;
                    border-radius: 0.3rem;
                    background-color: #ffffff;
                    position: relative;

      .widget-logo {height: 70px;
                    width: 70px;
                    position: absolute;
                    top: -15px;
                    left: 10px;
                    color: #eeeeee;
                    border-radius: 0.25rem;}

                  }
}

.narrow {width: 200px !important;}
.standard {width: 350px !important;}
.wide {width: 650px !important;}

.low-shadow {box-shadow: 1px 2px 4px #969393;}
.high-shadow {box-shadow: 1px 2px 8px #969393;}
</style>
