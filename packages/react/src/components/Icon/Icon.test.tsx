import * as React from 'react'
import Icon from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('Icon component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Icon />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
