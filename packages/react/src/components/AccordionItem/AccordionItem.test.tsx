import React from 'react'
import AccordionItem from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('AccordionItem component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<AccordionItem />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
