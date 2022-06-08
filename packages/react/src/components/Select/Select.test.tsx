import React from 'react'
import Select from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('Select component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Select />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
