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
  onClick: (e: any) => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  size: keyof Size
  testID?: string
  value?: number
}

export const getRatingColor = ({ color }: Theme) => (
  { iconFilled, iconActive, disabled }: RatingBaseProps
) => (iconFilled && iconActive && !disabled ? '#F8B546' : color.mediumEmphasis)

const styles = createUseStyles((theme: Theme) => ({
  rating: {
    backgroundColor: 'transparent',
    display: 'flex',
    position: 'relative',
    '& > i': {
      cursor: ({ disabled, isClickable }: RatingBaseProps) => isClickable && !disabled && 'pointer',
      color: (getRatingColor(theme))
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
  onMouseEnter,
  onMouseLeave,
  value,
  size,
  testID
}: RatingBaseProps): JSX.Element => {
  const { rating } = styles({
    disabled,
    isClickable,
    iconFilled,
    iconActive
  })

  const checkIcon = iconFilled ? 'filled-action-rating' : 'outlined-action-rating'

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={rating}>
      <IconButtonBase
        disabled={disabled || !isClickable}
        IconComponent={<Icon ariaHidden={false} ariaLabel={ariaLabel} name={checkIcon} role="button" size={size} />}
        onClick={onClick}
        size={size}
        classes={rating}
        value={value}
        testID={testID}
      />
    </div>
  )
}

export default RatingBase
