import React from 'react'
import styles from './DialogHeader.styles'
import { DialogHeaderProps } from './DialogHeader.props'

const DialogHeader = React.forwardRef<HTMLDivElement, DialogHeaderProps>(({
  children, id, title, className = ''
}, ref) => {
  const { header, ...classes } = styles()

  return (
    <div className={`${className} ${header}`} ref={ref}>
      <h2 id={id} className={classes.title}>{title}</h2>
      {children}
    </div>
  )
})

export default DialogHeader
