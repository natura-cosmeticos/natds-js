import React from 'react'
import { BadgeProps, BadgeStandardProps } from './Badge.props'
import styles from './Badge.styles'

export const buildValue = ({ value, limit }: BadgeStandardProps) => (limit && value >= limit ? `${limit}+` : value)
export const isBadgeStandard = (props: BadgeProps): props is BadgeStandardProps => props.variant === 'standard'

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
          {buildValue(props)}
        </span>
      )}
    </div>
  )
}

export default Badge
