# Natura Design System - Icons

![Travis (.org)](https://img.shields.io/travis/natura-cosmeticos/natds-js.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/natura-cosmeticos/natds-js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/natura-cosmeticos/natds-js?targetFile=package.json)

## Installation and usage

### For React web projects

If your React project is not already using our React component library for the Design System, please install the `natds-web` dependency:

```shell script
# with npm
npm install --save @naturacosmeticos/natds-web

# with yarn
yarn add @naturacosmeticos/natds-web
```

Now, have you installed the [@naturacosmeticos/natds-web](https://github.com/natura-cosmeticos/natds-js/tree/master/packages/web) library?

Then, you can import the `Icon` component and, in the` name` property, enter the name of the icon you want to use, like:

```jsx
import { Icon } from "@naturacosmeticos/natds-web";

const YourApp = () => (
  <>
    <Icon name={"outlined-finance-bag"} />
    <Icon name={"outlined-content-gift"} />
  </>
)
```

Note that, above, we are using two examples of icons out of the hundreds of options we offer.

<details>
  <summary>How does the `Icon` component work internally?</summary>
  
We have created a React component using JSX that works like this:

```jsx highlight-line="2"
import React from "react"
import "@naturacosmeticos/natds-icons/dist/natds-icons.css";
import { iconNames } from "@naturacosmeticos/natds-icons";

const Icon = (props) => (
  <i className={`natds-icons-${props.name}`} />
);
```
  
</details>

#### Where do I find icon names?

You can search for the icons you need in our [Design System Storybook](https://storybook-web.natura.com.br).

Note that the availability of the icons may vary depending on the version you use.

So always try to use the latest version of `natds-web` (or` natds-icons`, if this is the case)

---

### For React Native projects

If your React Native project is not already using our library for the Design System, please install the `natds-rn` dependency:

```shell script
# with npm
npm install --save @naturacosmeticos/natds-rn

# with yarn
yarn add @naturacosmeticos/natds-rn
```

**Now, have you installed the [@naturacosmeticos/natds-rn](https://github.com/natura-cosmeticos/natds-rn/) library?**

Then follow the instructions of [Icons section of React Native readme](https://github.com/natura-cosmeticos/natds-rn/#icons).

**Looking for examples of using the `Icon` component in React Native and all the available properties?**

Check out our [documentation for `Icon` in the React Native Storybook for web](https://natds-rn.netlify.app/?path=/docs/components-icon--all).

---

### For non-React projects

You can use this package by installing it directly into your project with:

```sh
# with npm
npm install --save @naturacosmeticos/natds-icons

# with yarn
yarn add @naturacosmeticos/natds-icons
```

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

You can also import the [JSON file](https://github.com/natura-cosmeticos/natds-js/blob/master/packages/icons/src/natds-icons.json) that contains the relationships between the icon names and their `unicode` counterparts (don't rely on the `unicodes`, they are generated automatically)

```jsx highlight-line="2"
import {
  NatdsIconsTtf,
  iconNames
} from '@naturacosmeticos/natds-icons';
```

## How to contribute

To contribute, please check our [Contributing guidelines](./CONTRIBUTING.md).

