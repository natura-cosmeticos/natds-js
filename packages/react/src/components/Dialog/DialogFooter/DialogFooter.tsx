import React from 'react'
import styles from './DialogFooter.styles'
import { DialogFooterProps } from './DialogFooter.props'

const DialogFooter = React.forwardRef<HTMLDivElement, DialogFooterProps>(({
  primaryButton,
  className = '',
  secondaryButton
}, ref) => {
  const { footer } = styles()

  return (
    <div className={`${className} ${footer}`} ref={ref}>
      {secondaryButton}
      {primaryButton}
    </div>
  )
})

export default DialogFooter
