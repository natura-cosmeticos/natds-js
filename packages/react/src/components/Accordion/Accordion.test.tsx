import React from 'react'
import Accordion from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('Accordion component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Accordion />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
