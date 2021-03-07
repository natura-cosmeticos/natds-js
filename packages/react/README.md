# Natura Design System - React

React components for web development inside Natura&Co.

[![npm package](https://img.shields.io/npm/v/@naturacosmeticos/natds-react/latest.svg)](https://www.npmjs.com/package/@naturacosmeticos/natds-react)
[![Code coverage](https://img.shields.io/codecov/c/github/natura-cosmeticos/natds-js/main.svg)](https://codecov.io/gh/natura-cosmeticos/natds-js/branch/main)
[![GitHub Issues](https://img.shields.io/github/issues/natura-cosmeticos/natds-js.svg)](https://github.com/natura-cosmeticos/natds-js/issues)
[![License](https://img.shields.io/badge/license-ISC-blue.svg)](https://opensource.org/licenses/ISC)

---

## Getting started

### Requirements

- Please note that `react >= 16.8.4` and `react-dom >= 16.8.4` are peer dependencies.
- We recommend `node >= 8.0.0`
- If your project uses TypeScript, we need `TypeScript >=2.1`;

### Installation

```shell script
$ npm install @naturacosmeticos/natds-web
```

OR

```shell script
$ yarn add @naturacosmeticos/natds-web
```

### Fonts

Load the Roboto font with `400` and `500` font weights:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto:wght@400;500&display=swap"
  rel="stylesheet"
/>
```

> This package does not provide Roboto font, only its font family names.

### Icons

Load the font icons from the package `@naturacosmeticos/natds-icons`:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-icons@latest/dist/natds-icons.css"
/>
```

or load it from the `node_modules` with a module bundler like `webpack` or `rollup`

`main.js`

```javascript
import React from "react";
import "@naturacosmeticos/natds-icons/natds-icons.css";
```

`webpack.config.js`

```javascript
module.exports = {
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      // ...
    ],
  },
};
```

### Usage

Here is a quick example to get you started:

Note that we enclose all your application in a `Provider` component.

```jsx
import React from "react";
import {
  Button,
  CssBaseline,
  Provider,
  themes,
} from "@naturacosmeticos/natds-web";

export const App = () => (
  <Provider theme={themes.natura.light} cssPrefix="YourCssPrefixHere">
    <CssBaseline />
    <Button color="primary" variant="contained">
      Hello World
    </Button>
  </Provider>
);
```

This package only works fine with the use of `<Provider />`, that is **essential** for applying styles correctly. And to avoid problems with multiple style fonts, it is necessary to add a `cssPrefix` with theme provider (the default is `natds`).

Please do not try to override theme palette or another tokens. Our Design System themes are ready to use.

## Additional information

### Bundled in this package

Installing `@naturacosmeticos/natds-react` will also install the following packages:

- `@naturacosmeticos/natds-icons`
- `@naturacosmeticos/natds-styles`

Thus, it is **not necessary to install them separately** to use the Design System.

### Using a CDN

**⚠️ This feature is experimental**.

We provide a Universal Module Definition (UMD) file via `jsdelivr`:

https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-web

```html
<script
  crossorigin="anonymous"
  src="https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-web"
></script>
```

For more info and examples, check our [CDN documentation](./docs/using-cdn.md).

---

## Troubleshooting

Having troubles? Please check our [Troubleshooting documentation](../../TROUBLESHOOTING.md).

## Questions

For how-to questions and other issues, please use the [issues section on our GitHub repo](https://github.com/natura-cosmeticos/natds-js/issues).

## Documentation

Check out our [documentation website](https://natds-web.natura.design/).

## Changelog

Recently updated? Please read the [changelog](./CHANGELOG.md).

## License

This project is licensed under the terms of [ISC License](../../LICENSE).
