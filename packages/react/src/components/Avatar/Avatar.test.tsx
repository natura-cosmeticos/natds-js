import * as React from 'react'
import Avatar from '.'
import renderWithTheme from '../../helpers/renderWithTheme'
import { renderVariant } from './Avatar'
import AvatarIcon from './AvatarIcon'
import AvatarImage from './AvatarImage'
import AvatarLabel from './AvatarLabel'

describe('Avatar component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Avatar />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should return correctly variant with defaultProps', () => {
    expect(renderVariant({})).toMatchSnapshot()
  })

  describe('Label variant', () => {
    it('should render correctly when the variant is type label', () => {
      const { styles, component } = renderWithTheme(<Avatar type="label" label="DS" />)

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })

    it('should render correctly when the variant is type label with default label', () => {
      const { styles, component } = renderWithTheme(<Avatar type="label" />)

      expect(component.container).toHaveTextContent('NA')
      expect([styles.toString(), component.container]).toMatchSnapshot()
    })

    it('should not render avatar label when type guard checks a different type', () => {
      const { component } = renderWithTheme(<AvatarLabel />)

      expect(component.container).toHaveTextContent('AvatarLabel: you must pass the type label attribute to render')
    })
  })

  describe('Icon variant', () => {
    it('should render correctly when the variant is type icon', () => {
      const { styles, component } = renderWithTheme(<Avatar type="icon" name="outlined-action-like" />)

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })

    it('should not render avatar icon when type guard checks a different type', () => {
      const { component } = renderWithTheme(<AvatarIcon />)

      expect(component.container).toHaveTextContent('AvatarIcon: you must pass the type icon attribute to render')
    })
  })

  describe('Image variant', () => {
    it('should render correctly with image variant', () => {
      const { styles, component } = renderWithTheme(<Avatar type="image" src="https://" alt="" />)

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })

    it('should not render avatar image when type guard checks a different type', () => {
      const { component } = renderWithTheme(<AvatarImage />)

      expect(component.container).toHaveTextContent('AvatarImage: you must pass the type image attribute to render')
    })
  })
})
