# @naturacosmeticos/natds-web

Natura Design System - Web Components

![Travis (.org)](https://img.shields.io/travis/natura-cosmeticos/natds-js.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/natura-cosmeticos/natds-js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/natura-cosmeticos/natds-js?targetFile=package.json)

---

## Installation

Install the packages in your project directory with:

```sh
# with npm
npm i --save @naturacosmeticos/natds-web

# with yarn
yarn add @naturacosmeticos/natds-web
```

## Usage

```jsx highlight-line="2"
import { Chip, Provider, themes } from '@naturacosmeticos/natds-web'

const { natura } = themes;

return (
  <Provider theme={natura.light}>
    <Chip
      clickable={boolean}
      disabled={boolean}
      label={string}
      onDelete={function}
    />
  </Provider>
)
```

## About Fonts

This package do not provide any fonts, only its font family names. If you desire to use the theme font, you've got to import them on your application by yourself. We recommend taking a look at [Google Fonts](https://fonts.google.com/), since some of our fonts are available for free over there.

An example for importing `Roboto`, one of our main fonts, straight from google's api:

```css
/* CSS */
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
```

---

## Contributing

To contribute, please check out our contributing file [`CONTRIBUTING`](./CONTRIBUTING.md)
