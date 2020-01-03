# @naturacosmeticos/natds-styles

Natura Design System - Styles

![Travis (.org)](https://img.shields.io/travis/natura-cosmeticos/natds.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/natura-cosmeticos/natds/badge.svg?targetFile=package.json)](https://snyk.io/test/github/natura-cosmeticos/natds/packages/styles?targetFile=package.json)

## Installation

These are the icons used by [@naturacosmeticos/natds-web](https://github.com/natura-cosmeticos/natds-js/tree/master/packages/web) and [@naturacosmeticos/natds-rn](https://github.com/natura-cosmeticos/natds-js/tree/master/packages/mobile), they are imported by the corresponding component when using one of the above libraries.
They are included and managed by the components of these projects.


You can still use them by installing directly into your package with:

```sh
# with npm
npm install --save @naturacosmeticos/natds-styles

# with yarn
yarn add @naturacosmeticos/natds-styles
```

## Using with React
You'll need to serve the fonts within your project setup.
And you can use the css directly by importing it as follows (or you can use as a model to your own implementation, the important part is the unicode of each icon)

```sh
import '@naturacosmeticos/natds-icons/dist/natds-icons.css';

<i className="natds-icons natds-icons-2x natds-icons-cancel-filled" />
```

## Using with React Native/Native apps
You'll need to import the font family and the icon's code table, and setup within your project:

```sh
import { NatdsIconsTtf, iconNames } from '@naturacosmeticos/natds-icons/dist/natds-icons.css';
```

## Contributing

To contribute, please check out our contributing file [`CONTRIBUTING`](./CONTRIBUTING.md)

