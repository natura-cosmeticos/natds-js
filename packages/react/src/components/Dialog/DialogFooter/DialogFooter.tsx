import React from 'react'
import styles from './DialogFooter.styles'
import { DialogFooterProps } from './DialogFooter.props'

const DialogFooter = ({ children }: DialogFooterProps): JSX.Element => {
  const { action } = styles()
  return (
    <div className={action}>
      {children}
    </div>
  )
}

export default DialogFooter
