import React from 'react'
import AppBar from './AppBar'
import renderWithTheme from '../../helpers/renderWithTheme'
import AppBarItem from '../AppBarItem'

describe('AppBar component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<AppBar />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly without elevation', () => {
    const { styles, component } = renderWithTheme(<AppBar elevation={false} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with primary color variant', () => {
    const { styles, component } = renderWithTheme(<AppBar color="primary" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with inverse color variant', () => {
    const { styles, component } = renderWithTheme(<AppBar color="inverse" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with none color variant', () => {
    const { styles, component } = renderWithTheme(<AppBar color="none" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should have testID property', () => {
    const { component } = renderWithTheme(<AppBar testID="appbar" />)

    const { getByTestId } = component

    expect(getByTestId('appbar')).toBeInTheDocument()
  })

  it('should render AppBarItem children', () => {
    const { component } = renderWithTheme(
      <AppBar testID="appbar">
        <AppBarItem testID="child1">
          <span>test1</span>
        </AppBarItem>
        <AppBarItem testID="child2">
          <span>test2</span>
        </AppBarItem>
      </AppBar>
    )

    const { getByTestId } = component

    expect(getByTestId('child1')).toBeInTheDocument()
    expect(getByTestId('child2')).toBeInTheDocument()
  })
})
