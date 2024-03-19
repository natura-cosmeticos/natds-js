import * as React from 'react'
import Icon from '.'
import renderWithTheme from '../../helpers/renderWithTheme'
import { checkIcon } from './Icon'

describe('Icon component', () => {
  it('should render correctly with default props', () => {
    const { styles, component: { getByTestId } } = renderWithTheme(<Icon name="outlined-default-mockup" />)
    const component = getByTestId(/mockup/)

    expect(component).toHaveStyle({ fontSize: 24, color: '#111111' })
    expect([styles.toString(), component]).toMatchSnapshot()
  })
  it('should render correctly with `medium` size', () => {
    const { styles, component: { getByTestId } } = renderWithTheme(<Icon name="outlined-default-mockup" size="medium" />)
    const component = getByTestId(/mockup/)

    expect(component).toHaveStyle({ fontSize: 48 })
    expect([styles.toString(), component]).toMatchSnapshot()
  })
  it('should render correctly with `primary` color', () => {
    const { styles, component: { getByTestId } } = renderWithTheme(<Icon name="outlined-default-mockup" color="primary" />)
    const component = getByTestId(/mockup/)

    expect(component).toHaveStyle({ color: '#f4ab34' })
    expect([styles.toString(), component]).toMatchSnapshot()
  })
})
describe('CheckIcon', () => {
  it('should return the default icon name', () => {
    const checkedIcon = checkIcon('unexpected-icon-name')

    expect(checkedIcon).toBe('outlined-default-mockup')
  })
  it('should return the given icon name', () => {
    const iconChecked = checkIcon('outlined-social-contact')

    expect(iconChecked).toBe('outlined-social-contact')
  })
})
