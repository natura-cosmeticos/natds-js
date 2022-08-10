import React from 'react'
import Debug from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('Debug component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Debug />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
