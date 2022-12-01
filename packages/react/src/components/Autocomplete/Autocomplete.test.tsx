import React from 'react'
import Autocomplete from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('Autocomplete component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Autocomplete />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
