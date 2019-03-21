import Vue from "vue";
import Banner from "./Banner.vue";
import BaseTextInput from "./BaseTextInput.vue";
import BaseCheckbox from "./BaseCheckbox.vue";
import BaseEmailInput from "./BaseEmailInput.vue";
import BaseNumberInput from "./BaseNumberInput.vue";
import BasePhoneInput from "./BasePhoneInput.vue";
import BaseSelect from "./BaseSelect.vue";
import BaseButton from "./BaseButton.vue";

const Components = {
  Banner,
  BaseTextInput,
  BaseCheckbox,
  BaseEmailInput,
  BaseNumberInput,
  BasePhoneInput,
  BaseSelect,
  BaseButton
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
