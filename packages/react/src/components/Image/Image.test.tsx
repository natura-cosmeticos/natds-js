import React from 'react'
import Image from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('Image component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Image />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
