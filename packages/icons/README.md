# Natura Design System - Icons

![Travis (.org)](https://img.shields.io/travis/natura-cosmeticos/natds-js.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/natura-cosmeticos/natds-js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/natura-cosmeticos/natds-js?targetFile=package.json)

## Before you start...

Are already using the [@naturacosmeticos/natds-web](https://github.com/natura-cosmeticos/natds-js/tree/master/packages/web) library?

You don't need to install this library directly.

## How to install

You can still use this package by installing it directly into your project with:

```sh
# with npm
npm install --save @naturacosmeticos/natds-icons

# with yarn
yarn add @naturacosmeticos/natds-icons
```

## How to use

You can import fonts and the generated [CSS](https://github.com/natura-cosmeticos/natds-js/blob/master/packages/icons/src/natds-icons.css) and [JSON](https://github.com/natura-cosmeticos/natds-js/blob/master/packages/icons/src/natds-icons.json) files like this:

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

For use on web environments, you will need to serve the fonts and consume the [CSS](https://github.com/natura-cosmeticos/natds-js/blob/master/packages/icons/src/natds-icons.css) file as you see fit.

One possible way to use it on React is creating a simple (JSX) component like this:

```jsx highlight-line="2"
import React from "react"
import '@naturacosmeticos/natds-icons/dist/natds-icons.css';
import { iconNames } from '@naturacosmeticos/natds-icons';

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

To contribute, please check our [Contributing guidelines](./CONTRIBUTING.md).

