import React from 'react'
import { Size, Theme } from '@naturacosmeticos/natds-themes'
import { createUseStyles } from 'react-jss'
import Icon from '../../Icon'
import IconButtonBase from '../IconButton'

export interface RatingBaseProps {
  ariaLabel: string
  iconActive?: boolean
  iconFilled?: boolean
  size: keyof Size
  onClick: () => void
  disabled?: boolean
  clickable?: boolean
}

const styles = createUseStyles(({ color }: Theme) => ({
  rating: {
    backgroundColor: 'transparent',
    '& > i': {
      display: 'flex',
      color: ({ iconFilled, iconActive, disabled }: RatingBaseProps) => (
        iconFilled && iconActive && !disabled ? '#F8B546' : color.mediumEmphasis
      )
    }
  }
}))

const RatingBase = ({
  ariaLabel,
  clickable = false,
  disabled,
  iconActive,
  iconFilled,
  onClick,
  size
}: RatingBaseProps): JSX.Element => {
  const { rating } = styles({ iconFilled, iconActive, disabled })
  const checkIcon = iconFilled ? 'filled-action-rating' : 'outlined-action-rating'

  return (
    <IconButtonBase
      classes={rating}
      disabled={disabled || !clickable}
      size={size}
      onClick={onClick}
      IconComponent={(
        <Icon
          size={size}
          name={checkIcon}
          ariaLabel={ariaLabel}
        />
      )}
    />
  )
}

export default RatingBase
