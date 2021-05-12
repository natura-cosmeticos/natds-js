import React from 'react'
import Input from '.'
import renderWithTheme from '../../helpers/renderWithTheme'
import { InputProps } from './Input.props'

const defaultProps: InputProps = {
  onBlur: () => '',
  onChange: () => '',
  onFocus: () => '',
  id: 'example_to_test'
}

describe('Input component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Input {...defaultProps} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
    expect(component.getByTestId('ds-input')).not.toBeDisabled()
    expect(component.getByTestId('ds-input')).not.toBeRequired()
  })

  it('should render correctly when type is multiline', () => {
    const { styles, component } = renderWithTheme(<Input {...defaultProps} type="multiline" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
    expect(component.getByTestId('ds-input-multiline')).not.toBeDisabled()
    expect(component.getByTestId('ds-input-multiline')).not.toBeRequired()
    expect(component.getByTestId('ds-input-multiline')).toHaveProperty('readOnly', false)
  })
})
