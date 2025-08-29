import React from 'react'
import Icon from '../Icon'
import IconButtonBase from '../IconButton/IconButtonBase'
import { useBaseStyles } from './Rating.styles'
import { BaseComponentProps } from './Rating.props'

const RatingBase = React.forwardRef<HTMLButtonElement, BaseComponentProps>(({
  ariaLabel,
  disabled = false,
  iconActive = true,
  iconFilled = true,
  isClickable = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
  value,
  size,
  testID,
  ...rest
}, ref) => {
  const { ratingIcon, ratingContainer } = useBaseStyles({
    disabled,
    isClickable,
    iconFilled,
    iconActive
  })

  const checkIcon = iconFilled ? 'filled-action-rating' : 'outlined-action-rating'

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={ratingContainer}
      {...rest}
    >
      <IconButtonBase
        ref={ref}
        ariaLabel={ariaLabel}
        disabled={disabled || !isClickable}
        IconComponent={(
          <Icon
            ariaHidden
            ariaLabel={ariaLabel}
            name={checkIcon}
            role="button"
            size={size}
          />
        )}
        onClick={onClick}
        size={size}
        className={ratingIcon}
        value={value}
        testID={testID}
      />
    </div>
  )
})

export default RatingBase
