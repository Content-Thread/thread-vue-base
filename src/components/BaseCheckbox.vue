<template>
  <label class="base-form__label base-form__label--checkbox">
    <input 
      class="base-form__input base-form__checkbox" 
      type="checkbox"
      v-model="checkedValue"
      v-on="listeners"
      v-bind="$attrs"
    >
      <span class="control-indicator"></span>
      <span class="base-form__label-text"><slot name="label">{{labelText}}</slot></span>
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      default: () => "false"
    },
    labelText: {
      type: String,
      default: () => "no label provided"
    }
  },
  data() {
    return {
      checkedValue: this.value == "false" ? false : true
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => 
          this.$emit('input', event.target.checked.toString())
      }
    }
  },
  watch: {
    value:  {
      handler: function (newVal, oldVal) {
        this.checkedValue = newVal == "false" ? false : true;
      },
      immediate: true
    }
  }
};
</script>

<style scoped>
.base-form__label {
  text-align: left;
  width: 100%;
}

.base-form__label,
.base-form__label-text {
  display: block;
  font-size: 22px;
}

.base-form__input {
  width: 100%;
  font-size: 20px;
}
</style>