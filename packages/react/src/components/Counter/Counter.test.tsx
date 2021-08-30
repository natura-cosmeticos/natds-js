import * as React from 'react'
import { ReactTestRenderer, create } from 'react-test-renderer'
import { CounterProps } from './Counter.props'
import Counter from './Counter'

const defaultProps: CounterProps = {
  onChange: () => jest.fn(),
  onIncrement: () => jest.fn(),
  onDecrement: () => jest.fn(),
  value: Number()
}

describe('Counter component React', () => {
  it('renders correctly', () => {
    const testRenderer: ReactTestRenderer = create(<Counter {...defaultProps} />)

    expect(testRenderer).toMatchSnapshot('Counter component renders correctly')
  })
  it('renders correctly with label', () => {
    const testRenderer: ReactTestRenderer = create(<Counter {...defaultProps} label="label" />)

    expect(testRenderer).toMatchSnapshot('Counter component renders correctly')
  })
})
