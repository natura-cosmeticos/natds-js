import * as React from "react";
import { ThemeProvider } from '../../src/ThemeProvider'

const ThemeDecorator = (Story, context) => {

  const brand = context.globals.brand
  const mode = 'light'

  return (
    <ThemeProvider brand={brand} mode={mode}>
      <Story {...context} />
    </ThemeProvider>
  )
}

export default ThemeDecorator
