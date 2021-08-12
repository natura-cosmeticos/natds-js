import React from 'react'
import { IconColor, IconSize } from 'components/Icon/Icon.props'
import { Icon } from '../Icon'
import { IconButtonBase } from '../_subcomponents/IconButton'
import { IconButtonColors, IconButtonProps, IconButtonSize } from './IconButton.props'
import styles from './IconButton.styles'

export const getIconSize = (size: IconButtonSize) => {
  const iconSize = {
    medium: 'semiX',
    semi: 'standard',
    semiX: 'semi'
  }

  return iconSize[size]
}

export const checkIconColor = (
  backgroundStyle: string, isDisabled: boolean, color: IconButtonColors
) => {
  if (isDisabled) {
    return backgroundStyle === 'overlay' ? 'lowEmphasis' : 'mediumEmphasis'
  }
  return color
}

const IconButton = ({
  ariaLabel,
  backgroundStyle = 'none',
  color = 'highEmphasis',
  disabled = false,
  iconName,
  onClick,
  size = 'semi',
  testID
}: IconButtonProps): JSX.Element => {
  const { iconButtonContainer } = styles({ disabled, backgroundStyle, size })
  const iconSize = getIconSize(size) as IconSize
  const iconColor = checkIconColor(backgroundStyle, disabled, color) as IconColor

  return (
    <IconButtonBase
      classes={iconButtonContainer}
      disabled={disabled}
      onClick={onClick}
      size={size}
      testID={testID}
      icon={(
        <Icon
          name={iconName}
          color={iconColor}
          size={iconSize}
          ariaHidden={false}
          role="button"
          ariaLabel={ariaLabel}
        />
      )}
    />
  )
}

export default IconButton
