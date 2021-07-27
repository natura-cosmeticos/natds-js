import React from 'react'
import renderWithTheme from '../../../helpers/renderWithTheme'
import Label from './Label'

describe('Label', () => {
  it('should render correctly', () => {
    const { styles, component } = renderWithTheme(<Label text="some text" />)

    expect([styles, component.container]).toMatchSnapshot()
  })

  it('should render correctly when is disabled', () => {
    const { styles, component } = renderWithTheme(<Label text="some text" disabled />)

    expect([styles, component.container]).toMatchSnapshot()
  })
})
