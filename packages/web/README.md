# Natura Design System - React Web

React components for web development inside Natura.

[![npm package](https://img.shields.io/npm/v/@naturacosmeticos/natds-web/latest.svg)](https://www.npmjs.com/package/@naturacosmeticos/natds-web)
[![Monthly downloads](https://img.shields.io/npm/dm/@naturacosmeticos/natds-web.svg)](https://www.npmjs.com/package/@naturacosmeticos/natds-web)
[![Code coverage](https://img.shields.io/codecov/c/github/natura-cosmeticos/natds-js/main.svg)](https://codecov.io/gh/natura-cosmeticos/natds-js/branch/main)
[![Known Vulnerabilities](https://snyk.io/test/github/natura-cosmeticos/natds-js/badge.svg?targetFile=packages/web/package.json)](https://snyk.io/test/github/natura-cosmeticos/natds-js?targetFile=package.json)
[![Issue resolution](https://isitmaintained.com/badge/resolution/natura-cosmeticos/natds-js.svg)](https://isitmaintained.com/project/natura-cosmeticos/natds-js)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

---

## Getting started

Install and get started with Natura Design System components for React for web applications.

### Installation

Design System components for React is available as an [npm package](https://www.npmjs.com/package/@naturacosmeticos/natds-web).

#### Stable channel v0

To get the latest stable release always use `latest` distribution channel.

```shell script
$ npm install @naturacosmeticos/natds-web
```

Working with Yarn? Use the equivalent install command:

```shell script
$ yarn add @naturacosmeticos/natds-web
```

### Fonts

Load the Roboto font with `400` and `500` font weights:

`<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />`

> This package does not provide Roboto font, only its font family names.

### Icons

Load the font icons from the package `@naturacosmeticos/natds-icons`:

`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-icons@latest/dist/natds-icons.css">`

or load it from the node_modules with a module bundler like webpack or rollup

main.js

```javascript
import React from 'react';
import '@naturacosmeticos/natds-icons/natds-icons.css';
```

webpack.config.js

```javascript
module.exports = {
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      // ...
    ]
  }
};
```

### Usage

Here is a quick example to get you started:

Note that we enclose all your application in a `Provider` component.

```jsx
import React from 'react'
import { createGenerateClassName } from "@material-ui/core/styles";
import { Button, CssBaseline, Provider, themes } from "@naturacosmeticos/natds-web";

const generateClassName = createGenerateClassName({
    productionPrefix: props.cssPrefix || "natds",
});

export const App = () => (
  <Provider theme={themes.natura.light} generateClassName={generateClassName}>
    <CssBaseline />
    <Button color={"primary"} variant={"contained"}>
      Hello World
    </Button>
  </Provider>
)
```

This package only works fine with the use of `<Provider />`, that is **essential** for applying styles correctly. And to avoid problems with multiple style fonts, it is necessary to add a `cssPrefix` with theme provider.

Please do not try to override theme palette or another tokens. Our Design System themes are ready to use.

## Additional information

### Requirements

- Please note that `react >= 16.8.4` and `react-dom >= 16.8.4` are peer dependencies.
- We recommend at least LTS Node version (v8.0.0+);
- If your project uses TypeScript, we need TypeScript 2.1 at least;

If your project does not meet the minimum requirements, you can use [@naturacosmeticos/natds-styles](../styles/README.md).

### Bundled in this package

Installing `@naturacosmeticos/natds-web` will also install the following packages:

- `@material-ui/core`
- `@naturacosmeticos/natds-icons`
- `@naturacosmeticos/natds-styles`
- Other dependencies for styling.

Thus, it is not necessary to install them separately to use the Design System.

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

## Questions

For how-to questions and other issues, please use the [issues section on our GitHub repo](https://github.com/natura-cosmeticos/natds-js/issues).

## Examples

Look for some [example projects](https://github.com/natura-cosmeticos/natds-js/tree/main/examples) to get started.

## Documentation

Check out our [documentation website](http://storybook-web.natura.com.br/).

## Contributing

Read our [contributing guide](../../CONTRIBUTING.md) to learn about our development process, how to propose new components,
and how to build and test your changes to Natura Design System components for React web.

## Changelog

Recently updated? Please read the [changelog](./CHANGELOG.md).

## Roadmap

The future plans and high priority features and enhancements can be found in the [roadmap](../../docs/tech-roadmap.md) file.

## License

This project is licensed under the terms of [ISC License](../../LICENSE).
