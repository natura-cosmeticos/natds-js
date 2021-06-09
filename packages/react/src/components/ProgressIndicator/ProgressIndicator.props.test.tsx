import React from 'react'
import renderWithTheme from '../../helpers/renderWithTheme'
import ProgressIndicator from './ProgressIndicator'

describe('Progress Indicator', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<ProgressIndicator ariaLabel="ds-progress-indicator" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly with the given size', () => {
    const { styles, component } = renderWithTheme(<ProgressIndicator size="standard" ariaLabel="ds-progress-indicator" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
