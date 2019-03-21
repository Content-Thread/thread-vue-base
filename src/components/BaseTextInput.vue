<template>
  <label class="base-form__label">
    <span class="base-form__label-text"></span>
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

</style>