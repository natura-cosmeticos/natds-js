import React from 'react'
import styles from './Chip.styles'
import { ChipProps } from './Chip.props'
import Icon from '../Icon'
import Avatar from '../Avatar'
import Ripple from '../Ripple'

const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  (props, ref) => {
    const {
      className = '',
      labelText,
      leftIcon,
      rightIcon,
      color = 'neutral',
      leftAvatar,
      rightAvatar,
      disabled = false,
      selected = false,
      customBackground,
      customBorderColor,
      customLabelColor,
      size = 'semi',
      onClick,
      ...rest
    } = props

    const { wrapper, label } = styles({
      color,
      hasLeftAvatar: !!leftAvatar,
      hasRightAvatar: !!rightAvatar,
      hasLeftIcon: !!leftIcon,
      hasRightIcon: !!rightIcon,
      isDisabled: disabled,
      isSelected: selected,
      customBackground,
      customBorderColor,
      customLabelColor,
      size
    })

    return (
      <Ripple disabled={disabled} isCentered>
        <button
          ref={ref}
          type="button"
          className={`${className} ${wrapper}`}
          disabled={disabled}
          onClick={onClick}
          {...rest}
        >
          {!!leftAvatar && <Avatar type="image" src={leftAvatar} size="standard" />}
          {!!leftIcon && <Icon size="standard" name={leftIcon} color="highEmphasis" />}
          <span className={label}>{labelText}</span>
          {!!rightIcon && <Icon size="standard" name={rightIcon} color="highEmphasis" />}
          {!!rightAvatar && <Avatar type="image" src={rightAvatar} size="standard" />}
        </button>
      </Ripple>
    )
  }
)

export default Chip
