import React from 'react'
import { ThemeProvider as Provider, JssProvider } from 'react-jss'
import { ThemeProviderProps } from './ThemeProvider.props'
import buildTheme from './buildTheme'

const ThemeProvider = ({
  children, brand, mode, cssPrefix = 'natds-'
}: ThemeProviderProps) => (
  <JssProvider classNamePrefix={cssPrefix}>
    <Provider theme={buildTheme(brand, mode)}>
      {children}
    </Provider>
  </JssProvider>
)

export default ThemeProvider
