# Natura Design System - React Web

React components for web development inside Natura.

![Travis (.org)](https://img.shields.io/travis/natura-cosmeticos/natds-js.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/natura-cosmeticos/natds-js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/natura-cosmeticos/natds-js?targetFile=package.json)

---

## Install

### Using NPM

Install source files via npm or [use a CDN](#use-a-cdn). We take care of injecting the CSS needed.

Please note that `react` >= 16.8.4 and `react-dom` >= 16.8.0 are peer dependencies.

```shell script
# with npm
$ npm install @naturacosmeticos/natds-web

# with yarn
$ yarn add @naturacosmeticos/natds-web
```

Load the Roboto font:

```
https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap
```

This package does not provide Roboto font, only its font family names.

---

## Usage

This package only works fine with the use of `<Provider />`, that is **essential** for applying styles correctly.

```jsx highlight-line="3"
import React from "react"
import { Button, Provider, themes } from "@naturacosmeticos/natds-web"

const { natura } = themes;

const YourApp = () => (
   <Provider theme={natura.light}>
      <Button color={"primary"}>Button component</Button>
      <Button variant={"contained"}>Contained button</Button>
   </Provider>
)
```

Explore the [storybook docs](https://natds-js.netlify.app/) for more details and examples.

---

## Additional information

### Requirements

-  We recommend at least LTS Node version (v8.0.0+);
- If your project uses TypeScript, we need TypeScript 2.1 at least;

If your project does not meet the minimum requirements, you can use [@naturacosmeticos/natds-styles](../styles/README.md).

### Bundled in this package

Installing `@naturacosmeticos/natds-web` will also install the following packages:

- `@material-ui/core`
- `@naturacosmeticos/natds-icons`
- `@naturacosmeticos/natds-styles`
- `@styled-components`

Thus, it is not necessary to install them to use the Design System.

### Use a CDN

⚠️ This feature is experimental

You can try using our Design System components for React with minimal Front-end infrastructure, which can be great for
some micro frontend cases.

We provide a Universal Module Definition (UMD) file via `jsdelivr`:
https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-web@0.6.17/dist/umd/index.js

jsdelivr ``is our recommended way, since it have [more pops and CDN/DNS redundancy](https://www.jsdelivr.com/network).

⚠️ We discourage using this approach in production, since this is experimental, and the client has to download the
entire library, regardless of which components your project will use, affecting performance and bandwidth utilization.

⚠️ The UMD links are using the latest tag to point to the latest version of the library. This pointer is unstable, it shifts as we release new versions. You should consider pointing to a specific version, such as v4.4.0.

--

## Contributing

To contribute, please check out our [Contributing guidelines](./CONTRIBUTING.md)
