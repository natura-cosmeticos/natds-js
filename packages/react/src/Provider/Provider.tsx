import React from 'react'
import { ThemeProvider } from 'react-jss'
import themes from '@naturacosmeticos/natds-themes'
import { IProviderProps } from 'Provider'

const Provider = ({ children, brand, mode }: IProviderProps) => {
  const currentTheme = brand && mode ? themes[brand][mode] : themes.natura.light

  return (
    <ThemeProvider theme={currentTheme}>
      {children}
    </ThemeProvider>
  )
}

export default Provider
