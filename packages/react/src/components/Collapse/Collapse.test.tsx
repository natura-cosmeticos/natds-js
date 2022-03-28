import React from 'react'
import Collapse from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('Collapse component', () => {
  it('should render correctly with default props and opened', () => {
    const { styles, component } = renderWithTheme(<Collapse open>something</Collapse>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with default props and closed', () => {
    const { styles, component } = renderWithTheme(<Collapse open={false}>something</Collapse>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
