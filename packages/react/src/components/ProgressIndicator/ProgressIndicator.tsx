import React from 'react'
import { ProgressIndicatorProps } from './ProgressIndicator.props'
import styles from './ProgressIndicator.styles'

const ProgressIndicator = React.forwardRef<HTMLDivElement, ProgressIndicatorProps>(({
  ariaLabel,
  showBackdrop = false,
  size = 'medium',
  brand,
  testID = 'ds-progress-indicator',
  className = '',
  ...rest
}, ref) => {
  const { backdrop, loader } = styles({ size, showBackdrop, brand })

  return (
    <div ref={ref} className={backdrop} role="progressbar" aria-label={ariaLabel} data-testid={testID} {...rest}>
      <div className={`${className} ${loader} ProgressIndicator-gaya`}>
        <svg viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20" />
        </svg>
      </div>
    </div>
  )
})

export default ProgressIndicator
