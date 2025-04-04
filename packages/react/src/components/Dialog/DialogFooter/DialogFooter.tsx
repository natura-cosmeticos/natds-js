import React from 'react'
import styles from './DialogFooter.styles'
import { DialogFooterProps } from './DialogFooter.props'

const DialogFooter = React.forwardRef<HTMLDivElement, DialogFooterProps>(({
  primaryButton,
  className = '',
  secondaryButton,
  accessibility
}, ref) => {
  const { footer } = styles()

  return (
    <div className={`${className} ${footer}`} ref={ref} {...accessibility}>
      {secondaryButton}
      {primaryButton}
    </div>
  )
})

export default DialogFooter
