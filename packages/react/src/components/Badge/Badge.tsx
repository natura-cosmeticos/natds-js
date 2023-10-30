import React from 'react'
import { BadgeProps, BadgeStandardProps } from './Badge.props'
import styles from './Badge.styles'

export const buildValue = ({ value, limit }: BadgeStandardProps) => (limit && value >= limit ? `${limit}+` : value)
export const isBadgeStandard = (props: BadgeProps): props is BadgeStandardProps => props.variant === 'standard'

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const {
    ariaHidden,
    brand,
    ariaLabel,
    className = '',
    color = 'alert',
    variant,
    testID,
    ...rest
  } = props

  const { badge, label } = styles({ variant, color, brand })

  return (
    <div
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      className={`${className} ${badge} Badge-gaya`}
      data-testid={testID}
      ref={ref}
      {...rest}
    >
      {isBadgeStandard(props) && (
        <span className={label}>
          {buildValue(props)}
        </span>
      )}
    </div>
  )
})

export default Badge
