import React from 'react'
import MenuItem from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('MenuItem component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<MenuItem>Menu Item</MenuItem>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with submenu type props', () => {
    const { styles, component } = renderWithTheme(<MenuItem type="submenu">Menu Item</MenuItem>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with title type props', () => {
    const { styles, component } = renderWithTheme(<MenuItem type="title">Menu Item</MenuItem>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with disabled props', () => {
    const { styles, component } = renderWithTheme(<MenuItem disabled>Menu Item</MenuItem>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with selected props', () => {
    const { styles, component } = renderWithTheme(<MenuItem selected>Menu Item</MenuItem>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with activated props', () => {
    const { styles, component } = renderWithTheme(<MenuItem activated>Menu Item</MenuItem>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
