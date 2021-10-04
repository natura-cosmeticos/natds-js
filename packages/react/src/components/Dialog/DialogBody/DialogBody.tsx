import React from 'react'
import { Divider } from '../../Divider'
import { DialogBodyProps } from './DialogBody.props'
import styles from './DialogBody.styles'

const DialogBody = ({ children, showDivider = false, className = '' }: DialogBodyProps): JSX.Element => {
  const { content } = styles()

  return (
    <>
      {showDivider && <Divider />}
      <div className={`${content} ${className}`}>
        {children}
      </div>
      {showDivider && <Divider />}
    </>
  )
}

export default DialogBody
