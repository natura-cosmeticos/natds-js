import * as React from 'react'
import TextField from '.'
import renderWithTheme from '../../helpers/renderWithTheme'
import { TextFieldProps } from './TextField.props'

const textFieldProps: TextFieldProps = { label: 'Label' }

describe('TextField component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<TextField {...textFieldProps} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly with medium size', () => {
    const { styles, component } = renderWithTheme(<TextField {...textFieldProps} size="medium" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with feedback error', () => {
    const { styles, component } = renderWithTheme(<TextField {...textFieldProps} feedback="error" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with feedback success', () => {
    const { styles, component } = renderWithTheme(<TextField {...textFieldProps} feedback="success" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly when required', () => {
    const { styles, component } = renderWithTheme(<TextField {...textFieldProps} testID="input" required />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
    expect(component.getByTestId('input')).toBeRequired()
  })

  it('should render correctly with helper text', () => {
    const { styles, component } = renderWithTheme(<TextField {...textFieldProps} helperText="helper text" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
