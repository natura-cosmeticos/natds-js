import React from 'react'
import renderWithTheme from '../../helpers/renderWithTheme'
import Card from './Card'

describe('Card component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Card>some content</Card>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should not apply box-shadow style', () => {
    const { styles, component } = renderWithTheme(<Card elevation={false}>some content</Card>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should not apply border-radius style', () => {
    const { styles, component } = renderWithTheme(<Card radius={false}>some content</Card>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
