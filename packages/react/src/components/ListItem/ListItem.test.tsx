import React from 'react'
import renderWithTheme from '../../helpers/renderWithTheme'
import ListItem from './ListItem'

describe('ListItem component', () => {
  it('should render correctly', () => {
    const { styles, component } = renderWithTheme(<ListItem id="some-item">some item here</ListItem>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly with divider', () => {
    const { styles, component } = renderWithTheme(<ListItem id="some-item" divider="full-bleed">some item here</ListItem>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
