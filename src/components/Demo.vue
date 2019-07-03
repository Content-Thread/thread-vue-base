<template>
  <div>
    <h1>Demo of Components</h1>
    <Banner>This is a banner</Banner>
    <hr>
    <h2>Base Form</h2>
    <BaseForm apiUrl="https://swapi.co/api/people/2" :payload="validations">
      <h2>Base Text Input</h2>
      <BaseTextInput v-model="textval" @input="logInput" :class="{
        'has-error': $v.textval.$invalid
      }"/>
      <hr>
      <h2>Base Checkbox Input</h2>
      <BaseCheckbox @input="logInput"/>
      <hr>
      <h2>Base Email Input</h2>
      <BaseEmailInput v-model="emailval" @input="logInput"/>
      <hr>
      <h2>Base Phone Input</h2>
      <BasePhoneInput v-model="phoneval" @input="logInput"/>
      <hr>
      <h2>Base Number Input</h2>
      <BaseNumberInput v-model="numberval" @input="logInput"/>
      <hr>
      <h2>Base Select Input</h2>
      <BaseSelect @input="logInput">
      </BaseSelect>
      <hr>
      <h3>Base Button</h3>
      <BaseButton/>
    </BaseForm>
  </div>
</template>

<script>
import { minLength } from 'vuelidate/lib/validators'

export default {
  name: "Demo",
  data(){
    return {
      textval: '',
      emailval: '',
      phoneval: '',
      numberval: '',
      validations:  {
        someprop: 'hello'

      }
    }
  },
  methods: {
    logInput: function(value) {
      console.log("input", value);
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
