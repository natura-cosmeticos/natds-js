# CSS Baseline

We provide a `CssBaseline` component to kickstart an elegant and consistent baseline to build upon.

## Import

```jsx
import { CssBaseline } from "@naturacosmeticos/natds-web"
```

## Global reset

You might be familiar with `normalize.css`, a collection of HTML element and attribute style-normalizations.

```jsx
import React from "react";
import { CssBaseline } from "@naturacosmeticos/natds-web"

export const MyApp = () => (
  <React.Fragment>
    <CssBaseline />
    {/* The rest of your application */}
  </React.Fragment>
);
```

## Scoping on children

However, if you are progressively migrating a website to Natura Design System, using a global reset might not be an option.

It's possible to apply the baseline only to the children by using the `ScopedCssBaseline` component.

```jsx
import React from "react";
import MyApp from "./MyApp";
import ScopedCssBaseline from "@naturacosmeticos/natds-web"

export const MyAppWithScopedStyles = () => (
  <ScopedCssBaseline>
    {/* The rest of your application */}
    <MyApp />
  </ScopedCssBaseline>
);
```

## Approach

### Page

`CssBaseline` (or `ScopedCssBaseline`) updates the `html` and `body` elements to provide a better page-wide defaults.

More specifically:

- It removes the margin in all browsers;
- It applies the default Natura Design System. It is using `theme.palette.background.default` for standard devices;
- It applies a neutral background for print devices.

### Layout

- `box-sizing` is set globally on the `<html>` element to `border-box`.
- Every element — including `*::before` and `*::after` are declared to inherit the `box-sizing: border-box` property;
- Declared with of elements will never be exceeded due to padding or border.

### Typography

- No base font-size is declared on the `<html>`, but `16px` is assumed (the browser default);
- Set the `theme.typography.body2` style on the `<body>` element;
- Set the `font-weight` to `theme.typography.fontWeightBold` for the `<b>` and `<strong>` elements;
- Custom font-smoothing is enabled for better display of the Roboto font.

