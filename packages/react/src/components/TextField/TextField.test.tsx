import * as React from 'react'
import TextField from '.'
import renderWithTheme from '../../helpers/renderWithTheme'
import { TextFieldProps } from './TextField.props'

const textFieldProps: TextFieldProps = {}

describe('TextField component', () => {
  it('should render correctly with given size', () => {
    const { styles, component } = renderWithTheme(<TextField {...textFieldProps} size="medium" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
