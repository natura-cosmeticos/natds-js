import React from 'react'
import renderWithTheme from '../../../helpers/renderWithTheme'
import Label from './Label.subcomponent'

describe('Label', () => {
  it('should render correctly', () => {
    const { styles, component } = renderWithTheme(<Label text="some text" />)

    expect([styles, component.container]).toMatchSnapshot()
  })

  it('should render correctly when is disabled', () => {
    const { styles, component } = renderWithTheme(<Label text="some text" disabled />)

    expect([styles, component.container]).toMatchSnapshot()
  })

  it('should render correctly with the given color', () => {
    const { styles, component } = renderWithTheme(<Label text="some text" color="mediumEmphasis" />)

    expect([styles, component.container]).toMatchSnapshot()
  })

  it('should render correctly with the given fontSize', () => {
    const { styles, component } = renderWithTheme(<Label text="some text" fontSize={18} />)

    expect([styles, component.container]).toMatchSnapshot()
  })
})
