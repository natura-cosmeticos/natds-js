import React from 'react'
import { ProgressIndicatorProps } from './ProgressIndicator.props'
import styles from './ProgressIndicator.styles'

const ProgressIndicator = ({
  ariaLabel,
  showLayer = false,
  size = 'medium',
  testID = 'ds-progress-indicator'
}: ProgressIndicatorProps): JSX.Element => {
  const { layer, loader } = styles({ size, showLayer })

  return (
    <div className={layer} role="progressbar" aria-label={ariaLabel} data-testid={testID}>
      <div className={loader}>
        <svg viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20" />
        </svg>
      </div>
    </div>
  )
}

export default ProgressIndicator
