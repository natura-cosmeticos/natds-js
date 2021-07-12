import * as React from 'react'
import { ReactTestRenderer, create } from 'react-test-renderer'
import Counter, { ICounterProps } from './Counter'

const defaultProps: ICounterProps = {
  onChange: () => jest.fn(),
  onIncrement: () => jest.fn(),
  onDecrement: () => jest.fn()
}

describe('Counter component', () => {
  it('renders correctly', () => {
    const testRenderer: ReactTestRenderer = create(<Counter {...defaultProps} />)

    expect(testRenderer).toMatchSnapshot('Counter component renders correctly')
  })
  it('renders correctly with label', () => {
    const testRenderer: ReactTestRenderer = create(<Counter {...defaultProps} label="some label" />)

    expect(testRenderer).toMatchSnapshot('Counter component renders correctly')
  })
})
