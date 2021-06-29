import React from 'react'
import styles from './DialogHeader.styles'
import { DialogHeaderProps } from './DialogHeader.props'

const DialogHeader = ({
  children, title
}: DialogHeaderProps): JSX.Element => {
  const { dialogHeaderContainer, dialogHeader, dialogHeaderChildrenContainer } = styles()

  return (
    <div className={dialogHeaderContainer}>
      <h1 className={dialogHeader}>{title}</h1>
      <div className={dialogHeaderChildrenContainer}>
        {children}
      </div>
    </div>
  )
}

export default DialogHeader
