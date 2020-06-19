# Natura Design System - React Web

React components for web development inside Natura.

![Travis (.org)](https://img.shields.io/travis/natura-cosmeticos/natds-js.svg)
[![codecov](https://codecov.io/gh/natura-cosmeticos/natds-js/branch/master/graph/badge.svg)](https://codecov.io/gh/natura-cosmeticos/natds-js)
[![Known Vulnerabilities](https://snyk.io/test/github/natura-cosmeticos/natds-js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/natura-cosmeticos/natds-js?targetFile=package.json)

---

## Install

### Using NPM

Install source files via npm or [use a CDN](./docs/using-cdn.md). We take care of injecting the CSS needed.

Please note that `react >= 16.8.4` and `react-dom >= 16.8.4` are peer dependencies.

```shell script
# with npm
$ npm install @naturacosmeticos/natds-web

# with yarn
$ yarn add @naturacosmeticos/natds-web
```

Load the Roboto font:

```
https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap
```

This package does not provide Roboto font, only its font family names.

---

## Usage

This package only works fine with the use of `<Provider />`, that is **essential** for applying styles correctly.

```jsx highlight-line="3"
import React from 'react'
import { Button, Provider } from "@naturacosmeticos/natds-web";

export const App = () => (
    <Provider>
        <Button color={"primary"} variant={"contained"}>Button</Button>
    </Provider>
)
```

Explore the [storybook docs](https://natds-js.netlify.app/) for more details and examples.

---

## Additional information

### Requirements

- We recommend at least LTS Node version (v8.0.0+);
- If your project uses TypeScript, we need TypeScript 2.1 at least;

If your project does not meet the minimum requirements, you can use [@naturacosmeticos/natds-styles](../styles/README.md).

### Bundled in this package

Installing `@naturacosmeticos/natds-web` will also install the following packages:

- `@material-ui/core`
- `@naturacosmeticos/natds-icons`
- `@naturacosmeticos/natds-styles`
- `styled-components`

Thus, it is not necessary to install them to use the Design System.

### Using a CDN

**⚠️ This feature is experimental**.

We provide a Universal Module Definition (UMD) file via `jsdelivr`:

https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-web

```html
<script
    crossorigin="anonymous"
    src="https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-web">
</script>
```

For more info and examples, check our [CDN documentation](./docs/using-cdn.md).

---

## Troubleshooting

Having troubles? Please check our [Troubleshooting documentation](../../TROUBLESHOOTING.md).

## Contributing

To contribute, please check out our [Contributing guidelines](./CONTRIBUTING.md)
