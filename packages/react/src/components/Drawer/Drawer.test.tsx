import * as React from 'react'
import Drawer from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('Drawer component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Drawer open />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
