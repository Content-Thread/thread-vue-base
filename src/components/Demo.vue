<template>
  <div>
    <h1>Demo of Components</h1>
    <Banner>This is a banner</Banner>
    <hr>
    <h2>Base Text Input</h2>
    <BaseTextInput v-model="textval" @input="logInput" :class="{
      'has-error': $v.textval.$invalid
    }"/>
    <hr>
    <h2>Base Checkbox Input</h2>
    <BaseCheckbox @input="logInput"/>
    <hr>
    <h2>Base Email Input</h2>
    <BaseEmailInput @input="logInput"/>
    <hr>
    <h2>Base Phone Input</h2>
    <BasePhoneInput @input="logInput"/>
    <hr>
    <h2>Base Number Input</h2>
    <BaseNumberInput @input="logInput"/>
    <hr>
    <h2>Base Select Input</h2>
    <BaseSelect @input="logInput">
    </BaseSelect>
    <h2>Base Button</h2>
    <BaseButton @input="logInput"/>
  </div>
</template>

<script>
import { minLength } from 'vuelidate/lib/validators'

export default {
  name: "Demo",
  data(){
    return {
      textval: ''
    }
  },
  methods: {
    logInput: function(event) {
      console.log("input!!", event);
    }
  },
  validations: {
    textval: {
      minLength: minLength(4)
    }
  }
};
</script>

<style scoped lang="scss">

.has-error {
  outline: 2px solid red;
}

</style>
