import * as React from 'react'
import Icon from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('Icon component', () => {
  it('should render correctly with default props', () => {
    const { styles, component: { getByTestId } } = renderWithTheme(<Icon />)
    const component = getByTestId(/mockup/)

    expect(component).toHaveStyle({ fontSize: 24, color: '#000000' })
    expect([styles.toString(), component]).toMatchSnapshot()
  })
  it('should render correctly with `medium` size', () => {
    const { styles, component: { getByTestId } } = renderWithTheme(<Icon size="medium" />)
    const component = getByTestId(/mockup/)

    expect(component).toHaveStyle({ fontSize: 48 })
    expect([styles.toString(), component]).toMatchSnapshot()
  })
  it('should render correctly with `primary` color', () => {
    const { styles, component: { getByTestId } } = renderWithTheme(<Icon color="primary" />)
    const component = getByTestId(/mockup/)

    expect(component).toHaveStyle({ color: '#f4ab34' })
    expect([styles.toString(), component]).toMatchSnapshot()
  })
})
