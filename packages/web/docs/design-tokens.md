# Using Design Tokens

Design tokens are style properties that allow you to style elements and components in your project, keeping them multi-brand and multi-mode.

## Material UI
This library is a `natds-web` dependency, so you don't need to install or configure anything, only follow the example:

```javascript
import { makeStyles, IThemeWeb } from "@naturacosmeticos/natds-web";

const useStyles = makeStyles((theme: IThemeWeb) => ({
  square: {
    width: theme.sizes.large,
    height: theme.sizes.large,
    backgroundColor: theme.color.primary
  }
}));

export const Example = () => {
  const { square } = useStyles()

  return <div className={square} />
}

```

## Styled Components
After installing and configuring [styled components library](https://styled-components.com/), you can replace the `Provider` from `natds-web` to `ThemeProvider` from `styled-components`:

```jsx
import { buildTheme } from "@naturacosmeticos/natds-web";
import { ThemeProvider } from "styled-components";

const theme = buildTheme('natura', 'light')

export const App = () => (
  <ThemeProvider theme={theme}>
    // your app
  </ThemeProvider>
)
```

So you can access the theme following the example:

```javascript
import styled from 'styled-components'

const Square = styled.div`
  height: ${({ theme }) => `${theme.sizes.large}px`};
  width: ${({ theme }) => `${theme.sizes.large}px`};
  background-color: ${({ theme }) => theme.color.primary};
`

export const Example = () => <Square />
```
