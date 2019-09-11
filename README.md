# thread-vue-base

This is Content Thread's library of re-usable VueJS components.

## Components Included

The intention is to solve most common problems with form inputs here and have them available in any other Content Thread Vue projects, and gradually add other small utility components as needed.

### Base Form Components

- BaseTextInput
- BaseCheckbox
- BaseEmailInput
- BaseNumberInput
- BasePhoneInput
- BaseSelect
- BaseButton
- BaseForm

### Other Components

#### BaseInUp

Lightweight component to wrap an element and apply a "fad in and slide up" transition when the component is rendered.

Example usage:

```html
<!-- AppointmentWidget will be rendered when "showApptWdidget" is true, and slide into it's final position with the in up anitmation -->
<BaseInUp>
  <AppointmentWidget :key="stepNumber" v-if="showApptWidget" />
</BaseInUp>
```

The `v-if` is not strictly necessary, but provides a straightforward means to control the timing of the appearance of an element, and fade it in exactly on schedule:

```js
  mounted() {
    setTimeout(function() {
      vm.showApptWidget = true;
    }, 500);
```

## Project setup for developing the library

```bash
npm install
```

Add new components in src/components and register them in src/components/index.js

## Project setup using in another project

Setup your view project first using Vue-CLI.

Add this to your dependencies in the package.json file:

```json
"thread-vue-base": "git+https://084c86feb80ed55fe7cf3377a7ca06f631b240d5:x-oauth-basic@github.com/Content-Thread/thread-vue-base.git#master"
```

Import the library in your main.js file like this:

```js
import "thread-vue-base";
```

The components available will be auto registered and can be used right away such as:

```html
<Banner>Now I've got a banner in here</Banner>
```

## Other functions you can do here

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles bundle for use by other projects

```bash
npm run build-bundle
```

### Run your tests

```bash
npm run test
```

### Lints and fixes files

```bash
npm run lint
```

### Run your end-to-end tests

```bash
npm run test:e2e
```

### Run your unit tests

```bash
npm run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
