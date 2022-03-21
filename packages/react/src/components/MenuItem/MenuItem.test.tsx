import React from 'react'
import MenuItem from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('MenuItem component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<MenuItem>Menu Item</MenuItem>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
