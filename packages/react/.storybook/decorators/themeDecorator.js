import * as React from "react";
import { Provider } from '../../src/Provider'

const ThemeDecorator = (Story, context) => {
  const brand = context.globals.brand
  const mode = context.globals.mode

  return (
    <Provider brand={brand} mode={mode}>
      <Story {...context} />
    </Provider>
  )
}

export default ThemeDecorator
