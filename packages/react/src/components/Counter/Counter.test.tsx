import React from 'react'
import { fireEvent } from '@testing-library/react'
import { CounterProps } from './Counter.props'
import Counter from './Counter'
import renderWithTheme from '../../helpers/renderWithTheme'

const defaultProps: CounterProps = {
  onChange: () => '',
  onIncrement: () => '',
  onDecrement: () => '',
  value: 0
}

describe('Counter', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Counter {...defaultProps} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly with label', () => {
    const { styles, component } = renderWithTheme(<Counter {...defaultProps} label="label" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should call onIncrement when is not disabled', () => {
    const onIncrementMock = jest.fn()
    const { component } = renderWithTheme(
      <Counter {...defaultProps} onIncrement={onIncrementMock} />
    )
    fireEvent.click(component.getByTestId('onIncrement-btn'))

    expect(onIncrementMock).toHaveBeenCalledTimes(1)
  })

  it('should call onDecrement when is not disabled', () => {
    const onDecrementMock = jest.fn()
    const { component } = renderWithTheme(
      <Counter {...defaultProps} onDecrement={onDecrementMock} value={1} />
    )
    fireEvent.click(component.getByTestId('onDecrement-btn'))

    expect(onDecrementMock).toHaveBeenCalledTimes(1)
  })
})
