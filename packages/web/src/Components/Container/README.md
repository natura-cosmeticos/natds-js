# Container

The container centers your content horizontally. It's most the basic layout element.

While containers can be nested, most layouts do not require a nested container.

## Import

```jsx
import { Container } from "@naturacosmeticos/natds-react"
// or
import Container from "@naturacosmeticos/natds-react-container"
```

## Usage

### Fluid

A fluid container with is bounded by the `maxWidth` property value.

```jsx
import React from "react";
import { Container } from "@naturacosmeticos/natds-web";

export const FluidContainerExample = () => (
  <Container maxWidth={"sm"}>Example content here</Container>
)
```

### Fixed

If you prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport,
you can set the `fixed` property. The max-width matches the min-width of the current breakpoint.

```jsx
import React from "react";
import { Container } from "@naturacosmeticos/natds-web";

export const FixedContainerExample = () => (
  <Container fixed>Example content here</Container>
)
```

