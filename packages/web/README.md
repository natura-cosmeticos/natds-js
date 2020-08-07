# Natura Design System - React Web

React components for web development inside Natura.

[![npm package](https://img.shields.io/npm/v/@naturacosmeticos/natds-web/latest.svg)](https://www.npmjs.com/package/@naturacosmeticos/natds-web)
[![Monthly downloads](https://img.shields.io/npm/dm/@naturacosmeticos/natds-web.svg)](https://www.npmjs.com/package/@naturacosmeticos/natds-web)
[![Travis build status](https://travis-ci.org/natura-cosmeticos/natds-js.svg?branch=main)](https://travis-ci.com/natura-cosmeticos/natds-js)
[![Code coverage](https://img.shields.io/codecov/c/github/natura-cosmeticos/natds-js/main.svg)](https://codecov.io/gh/natura-cosmeticos/natds-js/branch/main)
[![Known Vulnerabilities](https://snyk.io/test/github/natura-cosmeticos/natds-js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/natura-cosmeticos/natds-js?targetFile=package.json)
[![Issue resolution](https://isitmaintained.com/badge/resolution/natura-cosmeticos/natds-js.svg)](https://isitmaintained.com/project/natura-cosmeticos/natds-js)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

---

## Installation

Design System components for React web is available as an [npm package](https://www.npmjs.com/package/@naturacosmeticos/natds-web).

### Stable channel v0

```shell script
// with npm
npm install @naturacosmeticos/natds-web

// with yarn
yarn add @naturacosmeticos/natds-web
```

To get the latest stable release always use `latest` distribution channel.

## Usage

Here is a quick example to get you started:

```jsx highlight-line="4"
import React from 'react'
import { Button, Provider, themes } from "@naturacosmeticos/natds-web";

export const App = () => (
  <Provider theme={themes.natura.light}>
    <Button color={"primary"} variant={"contained"}>
      Hello World
    </Button>
  </Provider>
)
```

## Questions

For how-to questions and other issues, please use the [issues section on our GitHub repo](https://github.com/natura-cosmeticos/natds-js/issues).

## Examples

Look for some [example projects](https://github.com/natura-cosmeticos/natds-js-samples) to get started.

## Documentation

Check out our [documentation website](http://storybook-web.natura.com.br/).

## Contributing

Read our [contributing guide](../../CONTRIBUTING.md) to learn abot our development process, how to propose new components,
and how to build and test your changes to Natura Design System components for React web.

## Changelog

Recently updated? Please read the [changelog](./CHANGELOG.md).

## Roadmap

The future plans and high priority features and enhancements can be found in the [roadmap](../../docs/tech-roadmap.md) file.

## License

This project is licensed under the terms of [ISC License](../../LICENSE).
