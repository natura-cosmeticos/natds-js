import React from 'react'
import Chip from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('Chip component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Chip />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
