import React from 'react'
import TabItem from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('TabItem component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<TabItem />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
