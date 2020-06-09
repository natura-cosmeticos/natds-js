# Natura Design System - Icons

![Travis (.org)](https://img.shields.io/travis/natura-cosmeticos/natds-js.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/natura-cosmeticos/natds-js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/natura-cosmeticos/natds-js?targetFile=package.json)

## Before you start...

Are already using the [@naturacosmeticos/natds-web](https://github.com/natura-cosmeticos/natds-js/tree/master/packages/web) library?

You don't need to install this library directly.

## Installation

You can still use them by installing directly into your package with:

```sh
# with npm
npm install --save @naturacosmeticos/natds-icons

# with yarn
yarn add @naturacosmeticos/natds-icons
```

The fonts and the generated [CSS](https://github.com/natura-cosmeticos/natds-js/blob/master/packages/icons/src/natds-icons.css) and [JSON](https://github.com/natura-cosmeticos/natds-js/blob/master/packages/icons/src/natds-icons.json) files are exported as:

```jsx highlight-line="2"
import {
  iconNames, // the .json
  iconStyles, // the .css
  NatdsIconsEot,
  NatdsIconsSvg,
  NatdsIconsTtf,
  NatdsIconsWoff,
  NatdsIconsWoff2
} from '@naturacosmeticos/natds-icons';
```

For use on web environments, you will need to serve the fonts and consume the [css](https://github.com/natura-cosmeticos/natds-js/blob/master/packages/icons/src/natds-icons.css) file as you see fit. One possible way is to just create a simple (jsx) component like:

```jsx highlight-line="2"
import { iconNames } from '@naturacosmeticos/natds-icons';
import '@naturacosmeticos/natds-icons/dist/natds-icons.css';

const Icon = (props) => (
  <i className={`natds-icons-${props.name}`} />
);
```

You can also import the [JSON file](https://github.com/natura-cosmeticos/natds-js/blob/master/packages/icons/src/natds-icons.json) that contains the relationships between the icon names and their `unicode` counterparts (don't rely on the `unicodes`, they are generated automatically)

```jsx highlight-line="2"
import {
  NatdsIconsTtf,
  iconNames
} from '@naturacosmeticos/natds-icons';
```

## How to contribute

To contribute, please check our [`Contributing guidelines`](./CONTRIBUTING.md).

