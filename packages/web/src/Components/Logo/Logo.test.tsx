import React from 'react'
import * as TestRenderer from 'react-test-renderer'
import Logo from './Logo'

describe('Logo component', () => {
  it('should render correctly with default props', () => {
    const component = TestRenderer.create(<Logo />)

    expect(component).toMatchSnapshot()
  })
  it('should render correctly with medium size', () => {
    const component = TestRenderer.create(<Logo size="medium" />)

    expect(component).toMatchSnapshot()
  })
  it('should render correctly with custom color', () => {
    const component = TestRenderer.create(<Logo color="primary" />)

    expect(component).toMatchSnapshot()
  })

  it('should render correctly with secondary model', () => {
    const component = TestRenderer.create(<Logo model="a" />)

    expect(component).toMatchSnapshot()
  })
})
