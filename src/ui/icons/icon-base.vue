<template>
  <svg xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 16 16"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title
      :id="iconName"
      lang="en"
    >{{ iconName }} icon</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
        type: String,
        default: 'box'
      },
    width: {
      type: [Number, String],
      default: 32
    },
    height: {
      type: [Number, String],
      default: 32
    },
    iconColor: {
      type: String,
      default: '#ffffff'
    }
  },
  data: function(){
    return {}
  }
}
</script>

<style lang="scss" scoped>
svg {padding: 0;
    position: absolute;
    top: -0.2rem;
  left: -0.1rem;}
</style>
