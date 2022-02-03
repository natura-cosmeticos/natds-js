/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from 'react'
import Avatar from '.'
import renderWithTheme from '../../helpers/renderWithTheme'
import AvatarIcon, { convertIconSize } from './AvatarIcon'
import AvatarImage from './AvatarImage'
import AvatarLabel from './AvatarLabel'

describe('Avatar component', () => {
  it('should render correctly with default props', () => {
    // @ts-expect-error component without type
    const { styles, component } = renderWithTheme(<Avatar />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly with different size', () => {
    // @ts-expect-error component without type
    const { styles, component } = renderWithTheme(<Avatar size="semi" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  describe('Label variant', () => {
    it('should render correctly when the variant is type label', () => {
      const component = renderWithTheme(<Avatar type="label" label="DS" />)
      const subcomponent = renderWithTheme(<AvatarLabel type="label" label="DS" />)

      expect([component.styles.toString(), component.component.container]).toMatchSnapshot()
      expect([subcomponent.styles.toString(), subcomponent.component.container]).toMatchSnapshot()
    })

    it('should render correctly when the variant is type label with default label', () => {
      const { styles, component } = renderWithTheme(<Avatar type="label" />)

      expect(component.container).toHaveTextContent('NA')
      expect([styles.toString(), component.container]).toMatchSnapshot()
    })
  })

  describe('Icon variant', () => {
    it('should render correctly when the variant is type icon', () => {
      const component = renderWithTheme(<Avatar type="icon" />)
      const subcomponent = renderWithTheme(<AvatarIcon type="icon" />)

      expect([component.toString(), component.component.container]).toMatchSnapshot()
      expect([subcomponent.toString(), subcomponent.component.container]).toMatchSnapshot()
    })
    it('should render correctly when the variant is type icon with the given iconName', () => {
      const { styles, component } = renderWithTheme(<Avatar type="icon" name="outlined-action-like" />)

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })
  })

  describe('Image variant', () => {
    it('should render correctly with image variant', () => {
      const component = renderWithTheme(<Avatar type="image" src="https://" alt="" />)
      const subcomponent = renderWithTheme(<AvatarImage type="image" src="https://" alt="" />)

      expect([component.styles.toString(), component.component.container]).toMatchSnapshot()
      expect([subcomponent.styles.toString(), subcomponent.component.container]).toMatchSnapshot()
    })
  })
})

describe('convertIconSize', () => {
  it('should return the small size when the input is standard', () => {
    expect(convertIconSize('standard')).toBe('small')
  })
})
