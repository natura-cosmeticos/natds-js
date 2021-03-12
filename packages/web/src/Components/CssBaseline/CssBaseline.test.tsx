import * as React from 'react'
import * as TestRenderer from 'react-test-renderer'
import CssBaseline from './CssBaseline'

describe('CssBaseline component', () => {
  it('renders correctly', () => {
    const testRenderer : TestRenderer.ReactTestRenderer = TestRenderer.create(<><CssBaseline /></>)

    expect(testRenderer).toMatchSnapshot()
  })
})
