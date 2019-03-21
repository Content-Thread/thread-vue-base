<template>
  <label class="base-form__label">
    <span class="base-form__label-text">{{labelText}}</span>
    <input 
      class="base-form__input base-form__email-input" 
      type="email"
      :value="value"
      v-on="listeners"
      v-bind="$attrs"
      >
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    labelText: {
      type: String,
      default: () => "no label provided"
    }
  },
  data() {
    return {
      value: ''
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => 
          this.$emit('input', event.target.value)
      }
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