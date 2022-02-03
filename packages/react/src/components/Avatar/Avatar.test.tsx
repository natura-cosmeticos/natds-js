import * as React from 'react'
import Avatar from '.'
import renderWithTheme from '../../helpers/renderWithTheme'

describe('Avatar component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Avatar type="icon" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly with different size', () => {
    const { styles, component } = renderWithTheme(<Avatar type="icon" size="semi" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
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
  })

  describe('Icon variant', () => {
    it('should render correctly when the variant is type icon', () => {
      const { styles, component } = renderWithTheme(<Avatar type="icon" />)

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })
    it('should render correctly when the variant is type icon with the given iconName', () => {
      const { styles, component } = renderWithTheme(<Avatar type="icon" name="outlined-action-like" />)

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })
  })

  describe('Image variant', () => {
    it('should render correctly with image variant', () => {
      const { styles, component } = renderWithTheme(<Avatar type="image" src="https://" alt="" />)

      expect([styles.toString(), component.container]).toMatchSnapshot()
    })
  })
})
