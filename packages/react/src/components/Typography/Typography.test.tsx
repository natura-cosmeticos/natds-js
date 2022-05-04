import React from 'react'
import Typography from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('Typography component', () => {
  it('should render the component as body1 when variant is not defined', () => {
    const { styles, component } = renderWithTheme(<Typography>hello</Typography>)

    expect([styles.toString(), component.container]).toMatchSnapshot()
    expect(component.getByText(/hello/i)).toBeInTheDocument()
    expect(styles.includes('font-size: 16px;')).toBeTruthy()
  })
})
