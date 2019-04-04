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
    <hr>
    <h2>Buttons</h2>
    <p>Check console to see button output.</p>
    <h3>Base Button (no type provided, defaults to "submit", apiUrl prop is set)</h3>
    <BaseButton apiUrl="https://swapi.co/api/people/2" :payload="validations"/>
    <h3>Base Button (type="button")</h3>
    <BaseButton type="button"/>
    <h3>Base Button (type="submit")</h3>
    <BaseButton type="submit"/>
  </div>
</template>

<script>
import { minLength } from 'vuelidate/lib/validators'

export default {
  name: "Demo",
  data(){
    return {
      textval: '',
      validations:  {
        someprop: 'hello'

      }
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
