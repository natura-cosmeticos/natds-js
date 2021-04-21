import React from 'react'
import { IconButtonProps, IconButtonSize } from './IconButton.props'
import styles, { getIconSize } from './IconButton.styles'
import Icon from '../Icon/Icon'
import Ripple from '../Ripple/Ripple'

const IconButton = ({
  ariaLabel,
  backgroundStyle = 'none',
  color = 'highEmphasis',
  disabled = false,
  iconName,
  onClick,
  size = 'semi'
}: IconButtonProps): JSX.Element => {
  const { iconButtonContainer } = styles({ disabled, backgroundStyle, size })
  const iconSize = getIconSize(size) as IconButtonSize

  return (
    <Ripple disabled={disabled} isCentered>
      <button onClick={onClick} className={iconButtonContainer} disabled={disabled} type="button">
        <Icon name={iconName} color={color} size={iconSize} ariaHidden={false} role="button" ariaLabel={ariaLabel} />
      </button>
    </Ripple>
  )
}

export default IconButton
