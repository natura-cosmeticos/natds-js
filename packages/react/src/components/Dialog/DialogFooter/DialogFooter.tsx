import React from 'react'
import styles from './DialogFooter.styles'
import { DialogFooterProps } from './DialogFooter.props'

const DialogFooter = ({ children }: DialogFooterProps): JSX.Element => {
  const { footer } = styles()
  return (
    <div className={footer}>
      {children}
    </div>
  )
}

export default DialogFooter
