<template>

  <div class="widget-container">
  <!--  <div class="title">{{title}}</div>-->
  <!-- Need to add tooltips for on hover -->
    <div class="widget-logo low-shadow" :style="iconStyle">
      <slot name="widget-icon"></slot>
    </div>
  </div>

</template>

<script>

export default {
  name: "Widget",
  props: {
    title: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#9794a2'
    }
  },
  computed: {
    iconStyle: function(){
      var color = 'background-color:' + this.color + ' !important;';
      return color;
    }
  },
  components: {},
  methods: {
    showToolTip: function(event){
      alert('show');
    }
  }
};
</script>

<style  lang="scss" scoped>
.widget-container {width: 50px;
                  height: 50px;
                  display: inline-block;
                  vertical-align: top;
                  margin: 5px;
                  background-color: transparent;
                  position: relative;
                    //outline: 1px solid rgb(139, 139, 139);

          .title {position: absolute;
                  width: auto;
                  display: none;
                  min-width: 50px;
                  height: auto;
                  min-height: 1rem;
                  font-size: 0.8rem;
                  padding: 5px;
                  background-color: #ffffff;
                  color: #333333;
                  border-radius: 3px;
                  bottom: calc(-3rem + 5px);
                  left: 0;
                  z-index: 10;}

          .widget-logo {height: 50px;
                        width: 50px;
                        position: relative;
                        color: #eeeeee;
                        border-radius: 0.15rem;
                        background-color: #9794a2;
                        padding-top: 5px;
                        padding-left: 5px;

                      svg {}
                      }

}

.narrow {width: 225px !important;}
.standard {width: 355px !important;}
.wide {width: calc(100% - 10px) !important;}

.low-shadow {box-shadow: 1px 2px 4px #969393;}
.high-shadow {box-shadow: 1px 2px 8px #969393;}
</style>
