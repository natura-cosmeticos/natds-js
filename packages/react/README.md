# GaYa Design System - React

React components for web development inside Natura&Co.

[![npm package](https://img.shields.io/npm/v/@naturacosmeticos/natds-react/latest.svg)](https://www.npmjs.com/package/@naturacosmeticos/natds-react)
[![Monthly downloads](https://img.shields.io/npm/dm/@naturacosmeticos/natds-react.svg)](https://www.npmjs.com/package/@naturacosmeticos/natds-react)
[![codecov](https://codecov.io/gh/natura-cosmeticos/natds-js/branch/main/graph/badge.svg?token=ehUsMUSSbj)](https://codecov.io/gh/natura-cosmeticos/natds-js)
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
// with npm
npm install @naturacosmeticos/natds-react

// with yarn
yarn add @naturacosmeticos/natds-react
```

Installing `@naturacosmeticos/natds-react` will also install the packages `@naturacosmeticos/natds-icons`, `@naturacosmeticos/natds-themes` and `react-jss`


### Usage
#### **Theme Setup**

This package only works fine with the use of `<ThemeProvider />`, that is **essential** for applying styles correctly.

```tsx
import React from 'react'
import { ThemeProvider, Button, buildTheme } from "@naturacosmeticos/natds-react";

/**
 * The `buildTheme` function accepts two parameters:
 *
 * — brand: the name of the brand to applied
 *    ('natura' | 'theBodyShop' | 'avon' | 'aesop')
 *
 * — mode: the color scheme for the current branch
 *    ('light' | 'dark')
 *
*/
const theme = buildTheme('natura', 'light')

export const App = () => (
  <ThemeProvider theme={theme} cssPrefix="your-css-prefix">
    <Button variant="contained">
      Hello World
    </Button>
  </ThemeProvider>
)
```

> To avoid problems with multiple style fonts, it is necessary to add a `cssPrefix` with theme provider. Please do not try to override theme palette or other tokens. Our Design System themes are ready to use.

#### **Fonts**
##### Roboto

Load the Roboto font with `400` and `500` font weights:

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
```

> This package does not provide Roboto font, only its font family names.

##### Custom Fonts
Custom fonts are fonts defined by the following brands: avon, aesop, natura and the body shop. They are applied for all components and to use them you need to load the `@font-face` into your `index.html`:
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
import '@naturacosmeticos/natds-icons/natds-icons.css'
```

## UI Documentation
- [Storybook](https://natds-web.natura.design/react/index.html)
- [Zero Height](https://ds.natura.design/)

## Changelog
Recently updated? Please read the [changelog](./CHANGELOG.md).
