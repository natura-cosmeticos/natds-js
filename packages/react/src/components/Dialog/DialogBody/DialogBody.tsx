import React from 'react'
import { Divider } from '../../Divider'
import { DialogBodyProps } from './DialogBody.props'
import styles from './DialogBody.styles'

const DialogBody = ({ children, showDivider = false }: DialogBodyProps): JSX.Element => {
  const { dialogContent } = styles()

  return (
    <>
      {showDivider && <Divider />}
      <div className={dialogContent}>
        {children}
      </div>
      {showDivider && <Divider />}
    </>
  )
}

export default DialogBody
