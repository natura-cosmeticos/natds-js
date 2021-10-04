import React from 'react'
import styles from './DialogFooter.styles'
import { DialogFooterProps } from './DialogFooter.props'

const DialogFooter = ({ primaryButton, className = '', secondaryButton }: DialogFooterProps): JSX.Element => {
  const { footer } = styles()

  return (
    <div className={`${footer} ${className}`}>
      {secondaryButton}
      {primaryButton}
    </div>
  )
}

export default DialogFooter
