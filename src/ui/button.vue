<template>

  <button v-bind:class="['thebutton', buttonContent.size, buttonContent.type, buttonContent.shadow]" v-bind:id="buttonContent.id">
    {{ buttonContent.content }}
  </button>

</template>

<script>

export default {
  name: "Button",
  props: {
    buttonContent: {
      type: Object,
      default: {content: "Some Content",
                id: 'defaultButton',
                size: 'medium',
                type: '',
                shadow: ''}
    }
  },
  components: {
  }
};
</script>

<style  lang="scss" scoped>

 .thebutton {border-radius: 0.4rem;
            border: 0;
            background-color: #175690;
            color: #ffffff;
            font-size: 0.75rem;
            padding: 0.5rem 1rem;
            cursor: pointer;
            outline: none;
            }

.clear {border: 1px solid #868686;
        background-color: transparent;
        color: #868686;
        box-shadow: none;
        transition: background-color 50ms ease; }

.clear:hover {background-color: #f4f4f4;}

.small {font-size: 0.75rem;
        padding: 0.25rem 0.5rem;}

.medium {font-size: 0.9rem;
        padding: 0.5rem 1rem;}

.large {font-size: 1.1rem;
        padding: 0.75rem 1.25rem;}

.low {box-shadow: 1px 2px 3px #464646;}
.middle {box-shadow: 1px 2px 8px #464646;}
.high {box-shadow: 1px 2px 12px #464646;}
</style>
