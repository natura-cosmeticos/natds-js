import React from 'react'
import AccordionGroup from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('AccordionGroup component', () => {
  it('should render component with info styles if color is not defined', () => {
    const { styles, component } = renderWithTheme(
      <AccordionGroup />
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
