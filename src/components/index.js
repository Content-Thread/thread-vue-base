import Vue from "vue";
import Banner from "./Banner.vue";
import BaseForm from "./BaseForm"
import BaseTextInput from "./BaseTextInput.vue";
import BaseCheckbox from "./BaseCheckbox.vue";
import BaseEmailInput from "./BaseEmailInput.vue";
import BaseNumberInput from "./BaseNumberInput.vue";
import BasePhoneInput from "./BasePhoneInput.vue";
import BaseSelect from "./BaseSelect.vue";
import BaseButton from "./BaseButton.vue";
import BaseInUp from "./BaseInUp.vue";

const Components = {
  Banner,
  BaseTextInput,
  BaseCheckbox,
  BaseEmailInput,
  BaseNumberInput,
  BasePhoneInput,
  BaseSelect,
  BaseButton,
  BaseForm,
  BaseInUp
};

// automatically register these components in projects that are using this 
Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
