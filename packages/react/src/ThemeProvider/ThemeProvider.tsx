import React from 'react'
import { JssProvider, ThemeProvider as Provider } from 'react-jss'
import { ThemeProviderProps } from './ThemeProvider.props'
import buildTheme from './buildTheme'

const ThemeProvider = ({
  children, brand, mode, cssPrefix
}: ThemeProviderProps): JSX.Element => (
  <JssProvider classNamePrefix={cssPrefix}>
    <Provider theme={buildTheme(brand, mode)}>
      {children}
    </Provider>
  </JssProvider>
)

export default ThemeProvider
