import React from 'react'
import Typography from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('Typography component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Typography />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
