# Natura Design System - React Web

![Travis (.org)](https://img.shields.io/travis/natura-cosmeticos/natds-js.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/natura-cosmeticos/natds-js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/natura-cosmeticos/natds-js?targetFile=package.json)

---

## Before you start...

This package does not provide any fonts; only its font family names.

If you want to use the theme font (Roboto), please check the [Fonts](#fonts) section at the end of the README.

## How to install

Install the packages in your project root directory with:

```shell script
# npm
npm i --save @naturacosmeticos/natds-web

# yarn
yarn add @naturacosmeticos/natds-web
```

### Minimum requirements

* LTS Node version (v8.0.0+);
* `react` version `16.8.4` or higher;
* `react-dom` version `16.8.4` or higher;
* If your project uses TypeScript, we need TypeScript 2.1 at least;

If your project does not meet the minimum requirements, you can use [@naturacosmeticos/natds-styles](../styles/README.md).

---

## How to use

```jsx highlight-line="3"
import React from "react"
import { Button, Provider, themes } from "@naturacosmeticos/natds-web"

const { natura } = themes;

export const YourApp = () => (
   <Provider theme={natura.light}>
      <Button color={"primary"}>Button component</Button>
      <Button variant={"contained"}>Contained button</Button>
   </Provider>
)
```

Check our [storybook docs](https://natds-js.netlify.app/) for more details and examples.

---

## How to contribute

To contribute, please check out our [Contributing guidelines](./CONTRIBUTING.md)

---

## Additional information

### Already included in this package

Installing `@naturacosmeticos/natds-web` will also install the following packages:

- `@material-ui/core`
- `@naturacosmeticos/natds-icons`
- `@naturacosmeticos/natds-styles`
- `@styled-components`

Thus, it is not necessary to install them to use the Design System.

### Not included in package

#### Fonts

This package does not provide any fonts, only its font family names. If you desire to use the theme font,
you've got to import them on your application by yourself. We recommend taking a look at
[Google Fonts](https://fonts.google.com/), since some of our fonts are available for free over there.

An example for importing `Roboto`, one of our main fonts, straight from Google's API:

```css
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
```
