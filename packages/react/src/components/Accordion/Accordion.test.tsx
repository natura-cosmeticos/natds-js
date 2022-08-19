import React from 'react'
import Accordion from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('Accordion component', () => {
  it('should render component with info styles if color is not defined', () => {
    const { styles, component } = renderWithTheme(
      <Accordion />
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
