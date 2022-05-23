import React from 'react'
import Alert from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('Alert component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Alert />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
