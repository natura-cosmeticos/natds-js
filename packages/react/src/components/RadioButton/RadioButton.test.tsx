import React from 'react'
import { fireEvent } from '@testing-library/react'
import renderWithTheme from '../../helpers/renderWithTheme'
import RadioButton from './RadioButton'
import { RadioButtonProps } from './RadioButton.props'

const defaultProps: RadioButtonProps = {
  onChange: () => '',
  id: 'any',
  value: 'any value'
}

describe('RadioButton', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<RadioButton {...defaultProps} />)

    expect(component.getByTestId('ds-RadioButton-any')).not.toBeChecked()
    expect(component.getByTestId('ds-RadioButton-any')).not.toBeDisabled()
    expect([styles, component.container]).toMatchSnapshot()
  })

  it('should render correctly when is checked', () => {
    const { styles, component } = renderWithTheme(<RadioButton {...defaultProps} checked />)

    expect(component.getByTestId('ds-RadioButton-any')).toBeChecked()
    expect([styles, component]).toMatchSnapshot()
  })

  it('should render correctly when is disabled', () => {
    const { styles, component } = renderWithTheme(<RadioButton {...defaultProps} disabled />)

    expect(component.getByTestId('ds-RadioButton-any')).toBeDisabled()
    expect([styles, component.container]).toMatchSnapshot()
  })

  it('should call onChange', () => {
    const onChangeMock = jest.fn()
    const { component } = renderWithTheme(<RadioButton {...defaultProps} onChange={onChangeMock} />)

    fireEvent.click(component.getByTestId('ds-RadioButton-any'))
    expect(onChangeMock).toHaveBeenCalledTimes(2)
  })

  it('should render correctly with label', () => {
    const { styles, component } = renderWithTheme(<RadioButton {...defaultProps} label="Example" />)

    expect([styles, component.container]).toMatchSnapshot()
  })
})
