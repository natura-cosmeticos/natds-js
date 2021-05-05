import React from 'react'
import Input from '.'
import renderWithTheme from '../../helpers/renderWithTheme'
import { InputProps } from './Input.props'

const defaultProps: InputProps = {
  onBlur: () => '',
  onChange: () => '',
  onFocus: () => ''
}

describe('Input component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Input {...defaultProps} testId="input-text" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
    expect(component.getByTestId('input-text')).not.toBeDisabled()
    expect(component.getByTestId('input-text')).not.toBeRequired()
  })

  it('should render correctly when type is multiline', () => {
    const { styles, component } = renderWithTheme(<Input {...defaultProps} type="multiline" testId="input-multiline" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
    expect(component.getByTestId('input-multiline')).not.toBeDisabled()
    expect(component.getByTestId('input-multiline')).not.toBeRequired()
    expect(component.getByTestId('input-multiline')).toHaveProperty('readOnly', false)
  })
})
