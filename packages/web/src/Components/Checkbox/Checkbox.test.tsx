import * as React from 'react'
import * as TestRenderer from 'react-test-renderer'
import Checkbox from './Checkbox'

describe('Checkbox component', () => {
  describe('when no props are provided', () => {
    it('should match snapshot', () => {
      const testRenderer = TestRenderer.create(<Checkbox />)

      expect(testRenderer).toMatchSnapshot()
    })
  })
  it('when color is primary', () => {
    const testRenderer = TestRenderer.create(<Checkbox color="primary" />)

    expect(testRenderer).toMatchSnapshot()
  })
  it('when checked', () => {
    const testRenderer = TestRenderer.create(<Checkbox checked />)

    expect(testRenderer).toMatchSnapshot()
  })
  it('when disabled', () => {
    const testRenderer = TestRenderer.create(<Checkbox disabled />)

    expect(testRenderer).toMatchSnapshot()
  })
})
