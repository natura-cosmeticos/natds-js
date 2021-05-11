import React from 'react'
import InputAction from '.'
import renderWithTheme from '../../../helpers/renderWithTheme'
import { InputActionIcon, InputActionImage, InputProps } from '../Input.props'

const defaultProps: InputProps = {
  onBlur: () => '',
  onChange: () => '',
  onFocus: () => '',
  id: 'example to test'
}

const iconProps: InputActionIcon = {
  ...defaultProps,
  action: 'icon',
  iconName: 'filled-action-rating',
  onClick: () => '',
  ariaLabel: 'some rating icon button'
}

const imageProps: InputActionImage = {
  ...defaultProps,
  action: 'image',
  src: '',
  alt: ''
}

describe('InputAction component', () => {
  it('should render an icon button when receive action icon', () => {
    const { styles, component } = renderWithTheme(<InputAction {...iconProps} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly when type is multiline', () => {
    const { styles, component } = renderWithTheme(<InputAction {...imageProps} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
