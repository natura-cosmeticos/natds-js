import * as React from 'react'
import { render } from '@testing-library/react'
import { JssProvider, SheetsRegistry } from 'react-jss'
import Button from '.'
import ThemeProvider from '../../ThemeProvider'

describe('Button component', () => {
  it('should render correctly with default props', () => {
    const sheets = new SheetsRegistry()

    const { container } = render(
      <JssProvider registry={sheets}>
        <ThemeProvider>
          <Button label="button" />
        </ThemeProvider>
      </JssProvider>
    )

    expect([sheets.toString(), container]).toMatchSnapshot()
  })
})
