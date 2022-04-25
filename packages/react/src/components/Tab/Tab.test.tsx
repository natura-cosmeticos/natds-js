import React from 'react'
import Tab from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('Tab component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Tab />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
