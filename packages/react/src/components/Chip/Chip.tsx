import React from 'react'
import styles from './Chip.styles'
import { ChipProps } from './Chip.props'
import Icon from '../Icon'
import Avatar from '../Avatar'
import Ripple from '../Ripple'

const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  (props, ref) => {
    const {
      labelText,
      leftIcon,
      rightIcon,
      color = 'neutral',
      avatar,
      disabled = false,
      selected = false,
      customBackground,
      customBorderColor,
      size = 'semi',
      onClick,
      ...rest
    } = props

    const { wrapper, label } = styles({
      color,
      hasAvatar: !!avatar,
      hasLeftIcon: !!leftIcon,
      hasRightIcon: !!rightIcon,
      isDisabled: disabled,
      isSelected: selected,
      customBackground,
      customBorderColor,
      size
    })

    return (
      <Ripple disabled={disabled} isCentered>
        <button
          ref={ref}
          type="button"
          className={wrapper}
          disabled={disabled}
          onClick={onClick}
          {...rest}
        >
          {!!avatar && <Avatar type="image" src={avatar} size="standard" />}
          {!!leftIcon && <Icon size="standard" name={leftIcon} color="highEmphasis" />}
          <span className={label}>{labelText}</span>
          {!!rightIcon && <Icon size="standard" name={rightIcon} color="highEmphasis" />}
        </button>
      </Ripple>
    )
  }
)

export default Chip
