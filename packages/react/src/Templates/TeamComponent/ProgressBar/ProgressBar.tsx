import React from 'react'
import { ProgressBarProps } from './ProgressBar.props'
import styles from './ProgressBar.styles'

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({
    point, minPoint
  }, ref) => {
    const {
      container, box, boxProgress, boxChip, footer
    } = styles({ point })
    return (
      <div ref={ref} className={container}>
        <div className={box}>
          <div className={boxProgress}>
            <div className={boxChip}>{`${point} pts`}</div>
          </div>
        </div>
        <div className={footer}>
          <span>{`${point} pts`}</span>
          <span>
            Mínimo
            {' '}
            {minPoint}
            {' '}
            pts
          </span>
        </div>
      </div>
    )
  }
)
export default ProgressBar
