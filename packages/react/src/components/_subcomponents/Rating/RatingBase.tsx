import React from 'react'
import { Size, Theme } from '@naturacosmeticos/natds-themes'
import { createUseStyles } from 'react-jss'
import Icon from '../../Icon'
import IconButtonBase from '../IconButton'

export interface RatingBaseProps {
  ariaLabel: string
  disabled?: boolean
  iconActive?: boolean
  iconFilled?: boolean
  isClickable?: boolean
  onClick: () => void
  size: keyof Size
}

export const getRatingColor = ({ color }: Theme) => (
  { iconFilled, iconActive, disabled }: RatingBaseProps
) => (iconFilled && iconActive && !disabled ? '#F8B546' : color.mediumEmphasis)

const styles = createUseStyles((theme: Theme) => ({
  rating: {
    backgroundColor: 'transparent',
    '& > i': {
      display: 'flex',
      color: getRatingColor(theme)
    }
  }
}))

const RatingBase = ({
  ariaLabel,
  disabled = false,
  iconActive,
  iconFilled,
  isClickable,
  onClick,
  size
}: RatingBaseProps): JSX.Element => {
  const { rating } = styles({ iconFilled, iconActive, disabled })
  const checkIcon = iconFilled ? 'filled-action-rating' : 'outlined-action-rating'

  return (
    <IconButtonBase
      classes={rating}
      disabled={disabled}
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
