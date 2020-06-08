# Natura Design System - React Web

![Travis (.org)](https://img.shields.io/travis/natura-cosmeticos/natds-js.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/natura-cosmeticos/natds-js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/natura-cosmeticos/natds-js?targetFile=package.json)

---

## Installation

Install the packages in your project root directory with:

```shell script
npm i --save @naturacosmeticos/natds-web
```

```
yarn add @naturacosmeticos/natds-web
```

## Requirements

* Are you using `react-dom` in your project? We recommend using version at least `16.2.1`, `16.4.2` or higher.

## Usage

```jsx highlight-line="3"
import React from "react"
import { Button, Provider, themes} from "@naturacosmeticos/natds-web"

const { natura } = themes;

export const YourApp = () => (
   <Provider theme={natura.light}>
      <Button color={"primary"}>Button component</Button>
      <Button variant={"contained"}>Contained button</Button>
   </Provider>
)
```

## Included packages

When you install `@naturacosmeticos/natds-web`, the following packages will be installed too:

- `@material-ui/core`
- `@naturacosmeticos/natds-icons`
- `@naturacosmeticos/natds-styles`
- `@styled-components`

Thus, it is not necessary to install them to use the Design System.

## About Fonts

This package does not provide any fonts, only its font family names. If you desire to use the theme font, you've got to import them on your application by yourself. We recommend taking a look at [Google Fonts](https://fonts.google.com/), since some of our fonts are available for free over there.

An example for importing `Roboto`, one of our main fonts, straight from google's api:

```css
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
```

---

## Contributing

To contribute, please check out our contributing file [`CONTRIBUTING`](./CONTRIBUTING.md)
