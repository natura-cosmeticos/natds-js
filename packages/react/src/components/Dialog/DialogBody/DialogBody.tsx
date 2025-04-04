import React from 'react'
import { Divider } from '../../Divider'
import { DialogBodyProps } from './DialogBody.props'
import styles from './DialogBody.styles'

const DialogBody = React.forwardRef<HTMLDivElement, DialogBodyProps>(({
  children,
  showDivider = false,
  className = '',
  accessibility
}, ref) => {
  const { content } = styles()

  return (
    <>
      {showDivider && <Divider />}
      <div className={`${className} ${content}`} ref={ref} {...accessibility}>
        {children}
      </div>
      {showDivider && <Divider />}
    </>
  )
})

export default DialogBody
