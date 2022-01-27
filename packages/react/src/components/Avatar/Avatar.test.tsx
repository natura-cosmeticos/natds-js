import * as React from 'react'
import Avatar from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('Avatar component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Avatar type="label" label="abacaxi" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
