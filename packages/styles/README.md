# @naturacosmeticos/natds-styles

Natura Design System - Styles

![Travis (.org)](https://img.shields.io/travis/natura-cosmeticos/natds.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/natura-cosmeticos/natds/badge.svg?targetFile=package.json)](https://snyk.io/test/github/natura-cosmeticos/natds/packages/styles?targetFile=package.json)

## Installation

This package holds the themes used by [@naturacosmeticos/natds-web](https://github.com/natura-cosmeticos/natds-js/tree/master/packages/web), they are imported by the corresponding component.
They are included and managed by the components of these projects.


You can still use them by installing directly into your package with:

```sh
# with npm
npm install --save @naturacosmeticos/natds-styles

# with yarn
yarn add @naturacosmeticos/natds-styles
```

## Using with React
You'll need to import a theme (or create your own) and use it with the component provider

```sh
import { Provider, themes } from '@naturacosmeticos/natds-web';

const { natura: { light } } = themes;

<Provider theme={light}>
  {...}
</Provider>
```

## Contributing

To contribute, please check out our contributing file [`CONTRIBUTING`](./CONTRIBUTING.md)

