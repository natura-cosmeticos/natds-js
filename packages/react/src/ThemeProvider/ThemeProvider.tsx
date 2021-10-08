import React from 'react'
import { JssProvider, ThemeProvider as Provider } from 'react-jss'
import { ThemeProviderProps } from './ThemeProvider.props'

const ThemeProvider = ({ children, cssPrefix, theme }: ThemeProviderProps): JSX.Element => (
  <JssProvider classNamePrefix={cssPrefix}>
    <Provider theme={theme}>
      {children}
    </Provider>
  </JssProvider>
)

export default ThemeProvider
