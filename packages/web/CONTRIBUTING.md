# NatDS Web

Natura Design System - Web Components

## Test

Unit test

```sh
yarn test
```

## Lint

```sh
yarn lint
```

## Libs

We wrap the components from the [Material-UI](https://material-ui.com/) package. Check their docs and implementation out in order to understand how this package works.

## Themes

The themes from the inside styles package `@naturacosmeticos/natds-styles`. This package parses it to the Material-UI theme in order to use its provider. Any alteration to the signature of the theme or the existing components must be signaled to the maintainers in order to see if it is appliable in order to keep Breaking Changes in compliance with the development pipeline.

## Tests

Since our components are wrappers of already tested components, we rely mostly on snapshot testing. If any line of code was written inside the component, it must be tested. We demand 100% coverage on our tests.


***
See the scripts section in the package.json file for the complete list of tasks.
