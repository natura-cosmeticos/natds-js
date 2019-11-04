# @naturacosmeticos/natds-web

Natura Design System - Web Components

![Travis (.org)](https://img.shields.io/travis/natura-cosmeticos/natds.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/natura-cosmeticos/natds/badge.svg?targetFile=package.json)](https://snyk.io/test/github/natura-cosmeticos/natds?targetFile=package.json)

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

```sh
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

---

## Contributing

To contribute, please check out our contributing file [`CONTRIBUTING`](./CONTRIBUTING.md)
