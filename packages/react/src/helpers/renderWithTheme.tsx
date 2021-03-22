import React from 'react'
import { JssProvider, SheetsRegistry } from 'react-jss'
import { render } from '@testing-library/react'
import { ThemeProvider } from '../ThemeProvider'

const renderWithTheme = (component) => {
  const sheets = new SheetsRegistry()

  const renderTree = render(
    <JssProvider registry={sheets}>
      <ThemeProvider>
        {component}
      </ThemeProvider>
    </JssProvider>
  )

  return { styles: sheets.toString(), component: renderTree }
}

export default renderWithTheme
