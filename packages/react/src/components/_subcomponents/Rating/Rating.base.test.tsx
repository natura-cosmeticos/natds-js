import React from 'react'
import renderWithTheme from '../../../helpers/renderWithTheme'
import RatingBase from './Rating.base'

describe('RatingBase component', () => {
  it('should render correctly with the given props', () => {
    const { styles, component } = renderWithTheme(<RatingBase ariaLabel="Rating Base" size="large" onClick={() => ''} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
