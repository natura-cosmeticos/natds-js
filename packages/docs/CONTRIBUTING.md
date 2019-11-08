# NatDS Docs

Natura Design System - Docs

The contribution purpose of this package is for documentation and visual validation only. We use [Storybook](https://storybook.js.org/) for documenting purposes. It is versioned in the Travis-CI.

## Disclaimer for React Native

We use a package called [react-native-web](https://github.com/necolas/react-native-web) to parse react native components to the web, in order to document it in this package, so there is no immediate need for a mobile storybook version.

## Test

Unit test (we test our packages, not the docs)

```sh
yarn test:packages
```

## Lint

```sh
yarn lint
```

***
See the scripts section in the package.json file for the complete list of tasks.
