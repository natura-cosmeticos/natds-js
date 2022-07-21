import React from 'react'
import TestComponent from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('TestComponent component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<TestComponent />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
