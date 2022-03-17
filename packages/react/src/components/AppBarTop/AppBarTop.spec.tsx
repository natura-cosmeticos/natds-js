import React from 'react'
import AppBarTop from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('AppBarTop component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<AppBarTop>app bar</AppBarTop>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly without elevation', () => {
    const { styles, component } = renderWithTheme(<AppBarTop elevation={false}>app bar</AppBarTop>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with primary color variant', () => {
    const { styles, component } = renderWithTheme(<AppBarTop color="primary">app bar</AppBarTop>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with inverse color variant', () => {
    const { styles, component } = renderWithTheme(<AppBarTop color="inverse">app bar</AppBarTop>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with none color variant', () => {
    const { styles, component } = renderWithTheme(<AppBarTop color="none">app bar</AppBarTop>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
