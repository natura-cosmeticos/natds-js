import React from 'react'
import styles from './DialogHeader.styles'
import { DialogHeaderProps } from './DialogHeader.props'

const DialogHeader = ({ children, id, title }: DialogHeaderProps): JSX.Element => {
  const { dialogHeaderContainer, dialogHeader, dialogHeaderChildrenContainer } = styles()

  return (
    <div className={dialogHeaderContainer}>
      <h2 id={id} className={dialogHeader}>{title}</h2>
      <div className={dialogHeaderChildrenContainer}>
        {children}
      </div>
    </div>
  )
}

export default DialogHeader
