# @naturacosmeticos/natds-styles

Natura Design System - Styles

![Travis (.org)](https://img.shields.io/travis/natura-cosmeticos/natds-js.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/natura-cosmeticos/natds-js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/natura-cosmeticos/natds-js?targetFile=package.json)

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

For more examples on how to implement yourself this styles/themes on your project without the use of the [@naturacosmeticos/natds-web](https://github.com/natura-cosmeticos/natds-js/tree/master/packages/web), please refer to the [provider](https://github.com/natura-cosmeticos/natds-js/tree/master/packages/web/src/Provider/index.tsx).

## How to use

### ES6 and above

```javascript
import {tokens} from "@naturacosmeticos/natds-styles"
```

### ES5 and below

```javascript
const {tokens} = require("@naturacosmeticos/natds-styles")
```

## Contributing

To contribute, please check out our contributing file [`CONTRIBUTING`](./CONTRIBUTING.md)

