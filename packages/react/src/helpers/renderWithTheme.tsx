import React from 'react'
import { JssProvider, SheetsRegistry } from 'react-jss'
import { render } from '@testing-library/react'
import { buildTheme, ThemeProvider } from '../ThemeProvider'

const renderWithTheme = (component: JSX.Element) => {
  const sheets = new SheetsRegistry()

  const renderTree = render(
    <JssProvider registry={sheets}>
      <ThemeProvider theme={buildTheme('natura', 'light')}>
        {component}
      </ThemeProvider>
    </JssProvider>
  )

  return { styles: sheets.toString(), component: renderTree }
}

export default renderWithTheme
