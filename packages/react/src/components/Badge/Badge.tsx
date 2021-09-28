import React from 'react'
import { BadgeProps, BadgeStandard } from './Badge.props'
import styles from './Badge.styles'

export const showValue = ({ value, limit }: BadgeStandard) => (limit && value >= limit ? `${limit}+` : value)
export const isBadgeStandard = (props: BadgeProps): props is BadgeStandard => props.variant === 'standard'

const Badge = (props: BadgeProps): JSX.Element => {
  const {
    ariaHidden,
    ariaLabel,
    className = '',
    color = 'alert',
    variant,
    testID
  } = props

  const { badge, label } = styles({ color, variant })

  return (
    <div
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      className={`${badge} ${className}`}
      data-testid={testID}
    >
      {isBadgeStandard(props) && (
        <span className={label}>
          {showValue(props)}
        </span>
      )}
    </div>
  )
}

export default Badge
