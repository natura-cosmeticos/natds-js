import React from 'react'
import styles from './DialogHeader.styles'
import { DialogHeaderProps } from './DialogHeader.props'

const DialogHeader = ({
  children, id, title, className = ''
}: DialogHeaderProps): JSX.Element => {
  const { header, ...classes } = styles()

  return (
    <div className={`${header} ${className}`}>
      <h2 id={id} className={classes.title}>{title}</h2>
      {children}
    </div>
  )
}

export default DialogHeader
