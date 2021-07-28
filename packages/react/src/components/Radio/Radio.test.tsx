import React from 'react'
import { fireEvent } from '@testing-library/react'
import renderWithTheme from '../../helpers/renderWithTheme'
import Radio from './Radio'
import { RadioProps } from './Radio.props'

const defaultProps: RadioProps = {
  onChange: () => '',
  id: 'any',
  value: 'any value'
}

describe('Radio', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Radio {...defaultProps} />)

    expect(component.getByTestId('ds-radio-any')).not.toBeChecked()
    expect(component.getByTestId('ds-radio-any')).not.toBeDisabled()
    expect([styles, component.container]).toMatchSnapshot()
  })

  it('should render correctly when is checked', () => {
    const { styles, component } = renderWithTheme(<Radio {...defaultProps} checked />)

    expect(component.getByTestId('ds-radio-any')).toBeChecked()
    expect([styles, component]).toMatchSnapshot()
  })

  it('should render correctly when is disabled', () => {
    const { styles, component } = renderWithTheme(<Radio {...defaultProps} disabled />)

    expect(component.getByTestId('ds-radio-any')).toBeDisabled()
    expect([styles, component.container]).toMatchSnapshot()
  })

  it('should call onChange', () => {
    const onChangeMock = jest.fn()
    const { component } = renderWithTheme(<Radio {...defaultProps} onChange={onChangeMock} />)

    fireEvent.click(component.getByTestId('ds-radio-any'))
    expect(onChangeMock).toHaveBeenCalledTimes(1)
  })

  it('should render correctly with label', () => {
    const { styles, component } = renderWithTheme(<Radio {...defaultProps} labelText="Example" />)

    expect([styles, component.container]).toMatchSnapshot()
  })
})
