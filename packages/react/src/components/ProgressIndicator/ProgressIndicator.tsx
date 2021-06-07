import React from 'react'
import { ProgressIndicatorProps } from './ProgressIndicator.props'
import styles from './ProgressIndicator.styles'

const ProgressIndicator = ({
  showLayer = false,
  size = 'medium',
  testID = 'ds-progress-indicator',
  variant = 'circular'
}: ProgressIndicatorProps): JSX.Element => {
  const { base, layer } = styles({ size, showLayer, variant })

  return (
    <div className={layer} role="progressbar" data-testid={testID}>
      <div className={base} />
    </div>
  )
}

export default ProgressIndicator
