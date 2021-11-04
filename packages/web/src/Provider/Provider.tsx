/* eslint-disable react/destructuring-assignment */
import {
  MuiThemeProvider, StylesProvider, createGenerateClassName, createMuiTheme, ThemeOptions
} from '@material-ui/core/styles'
import * as React from 'react'

import { themes } from '../Themes'
import { IProviderProps } from './Provider.props'

export { IProviderProps } from './Provider.props'

export const Provider: React.FunctionComponent<IProviderProps> = ({ cssPrefix, children, ...props }: IProviderProps) => {
  /**
   * @todo fix(web): TS2322 - Type is not assignable to type 'ThemeOptions'. Types of some properties are incompatible.
   */

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const theme: ThemeOptions = props.theme ? { ...props.theme } : { ...themes.natura.light }
  const newTheme = createMuiTheme(theme)

  const generateClassName = () => createGenerateClassName({
    productionPrefix: cssPrefix || 'natds'
  })

  return (
    <StylesProvider generateClassName={generateClassName()}>
      <MuiThemeProvider theme={newTheme}>
        {children}
      </MuiThemeProvider>
    </StylesProvider>
  )
}
