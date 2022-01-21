import * as React from 'react'
import Link from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

const defaultProps = {
  text: 'Link',
  href: 'https://'
}

describe('Link component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Link {...defaultProps} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the variant is underline', () => {
    const { styles, component } = renderWithTheme(<Link {...defaultProps} variant="underline" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
