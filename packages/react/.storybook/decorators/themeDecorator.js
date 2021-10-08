import * as React from "react";
import { useDarkMode } from 'storybook-dark-mode';
import { ThemeProvider, buildTheme } from '../../src/ThemeProvider'

const ThemeDecorator = (Story, context) => {

  const brand = context.globals.brand
  const mode = useDarkMode() ? 'dark' : 'light'

  const theme = buildTheme(brand, mode)

  return (
    <ThemeProvider theme={theme} cssPrefix="natds-">
      <Story {...context} />
    </ThemeProvider>
  )
}

export default ThemeDecorator
