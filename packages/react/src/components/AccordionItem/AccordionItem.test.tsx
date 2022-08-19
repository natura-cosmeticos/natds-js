import React from 'react'
import AccordionItem from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('AccordionItem component', () => {
  it('should render component with info styles if color is not defined', () => {
    const { styles, component } = renderWithTheme(
      <AccordionItem title="Lorem" onClick={() => ({})}>Accordion Content</AccordionItem>
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
