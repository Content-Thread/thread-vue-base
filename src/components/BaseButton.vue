<template>
  <button v-on="listeners" v-bind="$attrs">{{labelText}}</button>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: () => ""
    },
    labelText: {
      type: String,
      default: () => "no label provided"
    },
    apiUrl: {
      type: String,
      default: () => ""
    },
    payload: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    checkSubmit(event) {
      if (event.target.type === "submit" && this.apiUrl.length) {
        console.log('Will submit to ' + this.apiUrl + "with this data", JSON.stringify(this.payload));
        this.axios.post(this.apiUrl, this.payload).then((response) => {
          console.log(response.data)
      })
      } else {
        console.log("will not submit, type is: " + event.target.type + ' and API URL has length ' + this.apiUrl.length);
      }

    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit("input", event.target.value),
        click: this.checkSubmit
      };
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