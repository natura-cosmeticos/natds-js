import React from 'react'
import { ProgressIndicatorProps } from './ProgressIndicator.props'
import styles from './ProgressIndicator.styles'

const ProgressIndicator = ({
  showLayer = false,
  size = 'medium',
  testID = 'ds-progress-indicator',
  variant = 'circular'
}: ProgressIndicatorProps): JSX.Element => {
  const { layer, spinner } = styles({ size, showLayer, variant })

  return (
    <div className={layer} role="progressbar" data-testid={testID}>
      <div className={spinner} />
    </div>
  )
}

export default ProgressIndicator
