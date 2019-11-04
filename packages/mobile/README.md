# @naturacosmeticos/natds-rn

Natura Design System - React Native Components

![Travis (.org)](https://img.shields.io/travis/natura-cosmeticos/natds.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/natura-cosmeticos/natds/badge.svg?targetFile=package.json)](https://snyk.io/test/github/natura-cosmeticos/natds/packages/mobile)

## Installation

Install the packages in your project directory with:

```sh
# with npm
npm install --save @naturacosmeticos/natds-rn react-native-vector-icons
react-native link react-native-vector-icons

# with yarn
yarn add @naturacosmeticos/natds-rn react-native-vector-icons
react-native link react-native-vector-icons
```

## Usage

```sh
import { Chip, Provider, themes } from '@naturacosmeticos/natds-rn'

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
