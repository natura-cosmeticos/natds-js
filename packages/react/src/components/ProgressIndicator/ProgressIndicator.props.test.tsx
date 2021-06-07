import React from 'react'
import renderWithTheme from '../../helpers/renderWithTheme'
import ProgressIndicator from './ProgressIndicator'

describe('Progress Indicator', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<ProgressIndicator />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
