import * as React from 'react'
import Drawer from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('Drawer component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Drawer open>something</Drawer>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with size medium', () => {
    const { styles, component } = renderWithTheme(<Drawer size="medium" open>something</Drawer>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly with size large', () => {
    const { styles, component } = renderWithTheme(<Drawer size="large" open>something</Drawer>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
