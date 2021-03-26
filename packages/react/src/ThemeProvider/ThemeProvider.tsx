import React from 'react'
import { ThemeProvider as Provider } from 'react-jss'
import { ThemeProviderProps } from './ThemeProvider.props'
import buildTheme from './buildTheme'

const ThemeProvider = ({
  children, brand, mode
}: ThemeProviderProps): JSX.Element => (
  <Provider theme={buildTheme(brand, mode)}>
    {children}
  </Provider>
)

export default ThemeProvider
