import React from 'react'
import { ThemeProvider as JssProvider } from 'react-jss'
import themes from '@naturacosmeticos/natds-themes'
import { ThemeProviderProps } from 'ThemeProvider'

const ThemeProvider = ({ children, brand, mode }: ThemeProviderProps): JSX.Element => {
  const currentTheme = brand && mode ? themes[brand][mode] : themes.natura.light

  return (
    <JssProvider theme={currentTheme}>
      {children}
    </JssProvider>
  )
}

export default ThemeProvider
