import * as React from 'react'
import Divider from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('Divider component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Divider />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the variant is inset', () => {
    const { styles, component } = renderWithTheme(<Divider variant="inset" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the variant is middle', () => {
    const { styles, component } = renderWithTheme(<Divider variant="middle" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
