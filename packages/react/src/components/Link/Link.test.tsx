import * as React from 'react'
import Link from '.'
import renderWithTheme from '../../helpers/renderWithTheme'
import { Icon } from '../Icon'

const defaultProps = {
  text: 'Link',
  href: 'https://'
}

describe('Link component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Link {...defaultProps} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly when the variant is regular', () => {
    const { styles, component } = renderWithTheme(<Link {...defaultProps} variant="regular" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly when the textColor is light', () => {
    const { styles, component } = renderWithTheme(<Link {...defaultProps} textColor="light" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with IconComponent rendered to the left', () => {
    const { styles, component } = renderWithTheme(
      <Link
        {...defaultProps}
        iconPosition="left"
        IconComponent={
          <Icon name="filled-default-mockup" />
        }
      />
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with IconComponent rendered to the right by default', () => {
    const { styles, component } = renderWithTheme(
      <Link
        {...defaultProps}
        IconComponent={
          <Icon name="filled-default-mockup" />
        }
      />
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
