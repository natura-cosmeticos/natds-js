import React from 'react'
import styles from './DialogHeader.styles'
import { DialogHeaderProps } from './DialogHeader.props'

const DialogHeader = ({ children, id, title }: DialogHeaderProps): JSX.Element => {
  const classes = styles()

  return (
    <div className={classes.header}>
      <h2 id={id} className={classes.title}>{title}</h2>
      {children}
    </div>
  )
}

export default DialogHeader
