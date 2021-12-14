import React from 'react'
import { Size, Theme } from '@naturacosmeticos/natds-themes'
import { createUseStyles } from 'react-jss'
import Icon from '../Icon'
import IconButtonBase from '../IconButton/IconButtonBase'

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

type RatingBaseStyleProps = Pick<RatingBaseProps, 'disabled' | 'isClickable' | 'iconFilled' | 'iconActive'>

export const getRatingColor = ({ color }: Theme) => (
  { iconFilled, iconActive, disabled }: RatingBaseStyleProps
) => (iconFilled && iconActive && !disabled ? '#F8B546' : color.mediumEmphasis)

const styles = createUseStyles((theme: Theme) => ({
  ratingContainer: {
    display: 'flex'
  },
  ratingIcon: {
    backgroundColor: 'transparent',
    position: 'relative',
    '&:after': {
      backgroundColor: theme.color.highlight,
      borderRadius: '50%',
      content: '" "',
      height: '100%',
      left: 0,
      opacity: 0,
      position: 'absolute',
      top: 0,
      width: '100%'
    },
    '&:hover:not([disabled]):after': { opacity: theme.opacity.lower },
    '&:focus:not([disabled]):after': { opacity: theme.opacity.low },
    '& > i': {
      cursor: ({ disabled, isClickable }: RatingBaseStyleProps) => isClickable && !disabled && 'pointer',
      color: (getRatingColor(theme))
    }
  }
}))

const RatingBase = React.forwardRef<HTMLButtonElement, RatingBaseProps>(({
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
  testID
}, ref) => {
  const { ratingIcon, ratingContainer } = styles({
    disabled,
    isClickable,
    iconFilled,
    iconActive
  })

  const checkIcon = iconFilled ? 'filled-action-rating' : 'outlined-action-rating'

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={ratingContainer}>
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
