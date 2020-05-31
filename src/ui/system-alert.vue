<template>

  <div :class="['sysalert-container']">
    <div :class="['sysalert-inner','low-shadow']">
      <div class="sysalert-logo high-shadow" :style="iconStyle"/>
      <div class="title">{{ title }}</div>
      <div class="content">{{ content }}</div>
    </div>
  </div>

</template>

<script>

export default {
  name: "Sysalert",
  props: {
    title: {
      type: String,
      default: 'No Title Provided'
    },
    content: {
      type: String,
      default: ''
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
.sysalert-container {width: 300px;
                    height: auto;
                    display: inline-block;
                    vertical-align: top;
                    margin: 15px;
                    background-color: transparent;
                    width: calc(100% - 5px);
                    position: relative;

      .sysalert-inner {width: 300px;
                    min-height: 70px;
                    margin-top: 0px;
                    border-radius: 0.3rem;
                    background-color: #ffffff;
                    position: relative;
                    width: 100%;

      .title {font-size: 1.25rem;
              margin-left: 40px;
              height: 70px;
              line-height: 70px;
              font-weight: 200;
              color: #3e3e3e;
              width: auto;}

      .content {font-size: 1.25rem;
              margin-left: 40px;
              height: auto;
              line-height: 1rem;
              font-weight: 200;
              color: #605d5d;
              width: auto;}

      .sysalert-logo {height: 50px;
                    width: 50px;
                    position: absolute;
                    top: 10px;
                    left: -20px;
                    color: #eeeeee;
                    border-radius: 35rem;}

                  }
}

.low-shadow {box-shadow: 1px 2px 4px #969393;}
.high-shadow {box-shadow: 1px 2px 8px #969393;}
</style>
