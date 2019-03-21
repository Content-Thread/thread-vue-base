<template>
  <label class="base-form__label">
    <span class="base-form__label-text">{{labelText}}</span>
    <input class="base-form__input base-form__text-input" type="text" />
  </label>
</template>

<script>
  export default {
    props: {
      labelText: {
        type: String,
        default: () => 'no label'
      }
    }
  }
</script>

<style scoped>
  
  .base-form__label {
    text-align: left;
    width: 100%;
  }

  .base-form__label, .base-form__label-text {
    display: block;
    font-size: 22px;
  }

  .base-form__input {
    width: 100%;
    font-size: 20px;
  }
</style>