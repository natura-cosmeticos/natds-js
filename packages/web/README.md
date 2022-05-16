# ⚠️ [DEPRECATED]

React Web Lib will be discontinued soon and will no longer receive support and updates. To consult [obsolete documentation click here](https://natds-web.natura.design/).

NATDS-React is the new React Web Lib for the Natura Design System, [see all details here](https://www.npmjs.com/package/@naturacosmeticos/natds-react).

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

### Installation

```shell script
// with npm
npm install @naturacosmeticos/natds-web

// with yarn
yarn add @naturacosmeticos/natds-web
```

### Usage
#### Theme Setup

This package only works fine with the use of `<Provider />`, that is **essential** for applying styles correctly.

```jsx
import React from 'react'
import { Button, Provider, buildTheme } from "@naturacosmeticos/natds-web";

const theme = buildTheme('natura', 'light')

export const App = () => (
  <Provider theme={theme} cssPrefix="your-css-prefix">
    <Button color="primary" variant="contained">
      Hello World
    </Button>
  </Provider>
)
```
> To avoid problems with multiple style fonts, it is necessary to add a `cssPrefix` with theme provider.
> Please do not try to override theme palette or other tokens. Our Design System themes are ready to use.

#### Fonts
##### Roboto

Load the Roboto font with `400` and `500` font weights:

`<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />`

> This package does not provide Roboto font, only its font family names.

##### Custom Fonts
Custom fonts are fonts defined by the following brands: avon, aesop, natura and the body shop.
They are applied for all components and to use them you need to load the @font-face into your `index.html` and add a third parameter to `buildTheme`, called `typography`:
> Available brands: avon, natura, aesop, theBodyShop

```html
<link href="https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-themes@latest/dist/assets/[BRAND]_fonts.css" rel="stylesheet" />
```

#### Icons

Load the font icons from the package `@naturacosmeticos/natds-icons`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-icons@latest/dist/natds-icons.css">
```

or load it from the `node_modules` with a module bundler.

`main.js`

```javascript
import React from 'react';
import '@naturacosmeticos/natds-icons/natds-icons.css';
```

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


