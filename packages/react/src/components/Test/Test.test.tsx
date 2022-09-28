import React from 'react'
import Test from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('Test component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Test />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
