/* eslint-disable max-lines-per-function */
import React from 'react'
import { fireEvent } from '@testing-library/react'
import { CounterProps } from './Counter.props'
import Counter from './Counter'
import renderWithTheme from '../../helpers/renderWithTheme'

const defaultProps: CounterProps = {
  onIncrement: () => '',
  onDecrement: () => ''
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

  it('should call onIncrement when maxValue is not reached', () => {
    const onIncrementMock = jest.fn()
    const { component } = renderWithTheme(
      <Counter {...defaultProps} onIncrement={onIncrementMock} />
    )
    fireEvent.click(component.getByTestId('onIncrement-btn'))

    expect(onIncrementMock).toHaveBeenCalledTimes(1)
  })

  it('should call onDecrement when minValue is not reached', () => {
    const onDecrementMock = jest.fn()
    const { component } = renderWithTheme(
      <Counter {...defaultProps} onDecrement={onDecrementMock} value={1} />
    )
    fireEvent.click(component.getByTestId('onDecrement-btn'))

    expect(onDecrementMock).toHaveBeenCalledTimes(1)
  })

  it('should disabled onIncrement when maxValue is reached', () => {
    const onIncrementMock = jest.fn()
    const { component } = renderWithTheme(
      <Counter {...defaultProps} value={99} onIncrement={onIncrementMock} />
    )
    fireEvent.click(component.getByTestId('onIncrement-btn'))

    expect(component.getByTestId('onIncrement-btn')).toBeDisabled()
    expect(onIncrementMock).not.toHaveBeenCalled()
  })

  it('should disabled onDecrement when minValue is reached', () => {
    const onDecrementMock = jest.fn()
    const { component } = renderWithTheme(
      <Counter {...defaultProps} onDecrement={onDecrementMock} />
    )
    fireEvent.click(component.getByTestId('onDecrement-btn'))

    expect(component.getByTestId('onDecrement-btn')).toBeDisabled()
    expect(onDecrementMock).not.toHaveBeenCalled()
  })

  it('should render correctly when is disabled', () => {
    const { styles, component } = renderWithTheme(<Counter {...defaultProps} disabled />)
    expect(component.getByTestId('onDecrement-btn')).toBeDisabled()
    expect(component.getByTestId('onIncrement-btn')).toBeDisabled()
    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
