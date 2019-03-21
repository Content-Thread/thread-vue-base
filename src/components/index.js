import Vue from "vue";
import Banner from "./Banner.vue";
import BaseTextInput from "./BaseTextInput.vue";

const Components = {
  Banner,
  BaseTextInput
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
