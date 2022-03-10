import React from 'react'
import AppBar from '.'
import renderWithTheme from '../../helpers/renderWithTheme'
import AppBarItem from '../AppBarItem'

describe('AppBar component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<AppBar>app bar</AppBar>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly without elevation', () => {
    const { styles, component } = renderWithTheme(<AppBar elevation={false}>app bar</AppBar>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with primary color variant', () => {
    const { styles, component } = renderWithTheme(<AppBar color="primary">app bar</AppBar>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with inverse color variant', () => {
    const { styles, component } = renderWithTheme(<AppBar color="inverse">app bar</AppBar>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with none color variant', () => {
    const { styles, component } = renderWithTheme(<AppBar color="none">app bar</AppBar>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
