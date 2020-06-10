<template>

  <div :class="['widget-container', size]">
    <div :class="['widget-inner','low-shadow', size]">
      <div class="widget-top">
        <div class="widget-logo high-shadow" :style="iconStyle">
          <slot name="widget-icon"></slot>
        </div>
        <div class="widget-title">
          {{ title }}
        </div>
      </div>
      <div class="content">
        <!--<hr class="top-line">-->
        <slot name="widget-content"></slot>
      </div>
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
                    position: relative;
                    //outline: 1px solid rgb(139, 139, 139);

      .widget-inner {width: 300px;
                    min-height: 100px;
                    margin-top: 20px;
                    border-radius: 0.3rem;
                    background-color: #ffffff;
                    position: relative;

      .widget-top {width: 100%;
                  min-height: 50px;
                  height: auto;
                //  background-color: rgba(97, 187, 249, 0.15);
                  position: relative;

          .widget-logo {height: 50px;
                        width: 50px;
                        position: absolute;
                        top: -10px;
                        left: 10px;
                        color: #eeeeee;
                        border-radius: 0.25rem;
                        background-color: #9794a2;
                        padding-top: 5px;
                        padding-left: 5px;

                      svg {}
                      }

          .widget-title {position: relative;
                      padding-top: 10px;
                      margin-right: 10px;
                      font-size: 0.9rem;
                      color: #afafaf;
                      font-weight: 200;
                      text-align: right;}
      }

      .content {height: auto;
              width: calc(100% - 20px);
              position: relative;
              margin-left: 10px;
              color: #6a6a6a;
              font-weight: 200;
              font-size: 0.8rem;
              padding-bottom: 10px;

        .top-line {height: 1px;
                  background-color: #f1f1f1;
                  border: 0;}
            }

                  }

}

.narrow {width: 225px !important;}
.standard {width: 355px !important;}
.wide {width: calc(100% - 10px) !important;}

.low-shadow {box-shadow: 1px 2px 4px #969393;}
.high-shadow {box-shadow: 1px 2px 8px #969393;}
</style>
