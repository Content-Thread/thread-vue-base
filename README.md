# thread-vue-base

This is Content Thread's library of re-usable VueJS components.

## Project setup for developing the library

```
npm install
```

Add new components in src/components and register them in src/components/index.js

## Project setup using in another project

Setup your view project first using Vue-CLI.

Add this to your dependencies in the package.json file:

```
"thread-vue-base": "git+https://084c86feb80ed55fe7cf3377a7ca06f631b240d5:x-oauth-basic@github.com/Content-Thread/thread-vue-base.git#master"
```

Import the library in your main.js file like this:

```
import "thread-vue-base";
```

The components available will be auto registered and can be used right away such as:

```
<Banner>Now I've got a banner in here</Banner>
```

## Other functions you can do here

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles bundle for use by other projects

```
npm run build-bundle
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Run your end-to-end tests

```
npm run test:e2e
```

### Run your unit tests

```
npm run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
