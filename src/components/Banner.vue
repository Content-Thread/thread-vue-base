<template>
  <div class="banner" :style="bannerStyles" :class="`banner__${position}`">
    <slot></slot>
  </div>
</template>
<script>
const defaultStyles = {
  left: 0,
  right: 0,
  border: '3px solid green'
};
export default {
  props: {
    position: {
      type: String,
      default: "top",
      validator(position) {
        return ["top", "bottom"].indexOf(position) > -1;
      }
    },
    styles: {
      type: Object,
      default: () => ({
        border: '10px solid blue'
      })
    }
  },
  data() {
    return {
      bannerStyles: {
        ...defaultStyles,
        ...this.styles
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.banner {
  padding: 12px;
  background-color: #fcf6cd;
  color: #f6a623;
  text-align: left;
}
</style>