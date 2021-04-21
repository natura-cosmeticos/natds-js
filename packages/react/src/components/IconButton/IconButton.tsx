import React from 'react'
import { IconColor, IconSize } from 'components/Icon/Icon.props'
import { IconButtonColors, IconButtonProps, IconButtonSize } from './IconButton.props'
import styles from './IconButton.styles'
import Icon from '../Icon/Icon'
import Ripple from '../Ripple/Ripple'

export const getIconSize = (size: IconButtonSize) => {
  const iconSize = {
    medium: 'semiX',
    semi: 'standard',
    semiX: 'semi'
  }

  return iconSize[size]
}

// eslint-disable-next-line max-len
export const checkIconColor = (backgroundStyle: string, isDisabled: boolean, color: IconButtonColors) => {
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
    <Ripple disabled={disabled} isCentered>
      <button onClick={onClick} className={iconButtonContainer} disabled={disabled} type="button" data-testid={testID}>
        <Icon name={iconName} color={iconColor} size={iconSize} ariaHidden={false} role="button" ariaLabel={ariaLabel} />
      </button>
    </Ripple>
  )
}

export default IconButton
