import React from 'react'
import { fireEvent } from '@testing-library/react'
import renderWithTheme from '../../helpers/renderWithTheme'
import Checkbox from './Checkbox'
import { CheckboxProps } from './Checkbox.props'

const defaultProps: CheckboxProps = {
  onChange: () => '',
  id: 'any',
  value: ''
}

describe('Checkbox component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Checkbox {...defaultProps} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with check', () => {
    const { styles, component } = renderWithTheme(<Checkbox {...defaultProps} checked />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly as indeterminate', () => {
    const { styles, component } = renderWithTheme(<Checkbox {...defaultProps} indeterminate />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should call onChange', () => {
    const onChangeMock = jest.fn()
    const { component } = renderWithTheme(<Checkbox {...defaultProps} onChange={onChangeMock} />)

    fireEvent.click(component.getByTestId('ds-checkbox-any'))

    expect(onChangeMock).toHaveBeenCalledTimes(1)
  })
})
