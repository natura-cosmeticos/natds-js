/* eslint-disable react/require-default-props */
import React from 'react'
import { Divider } from '../../Divider'
import { DialogBodyProps } from './DialogBody.props'
import styles from './DialogBody.styles'

const DialogBody = ({ children, showDivider = false }: DialogBodyProps): JSX.Element => {
  const { dialogContent, dialogContentContainer } = styles()
  return (
    <div className={dialogContentContainer}>
      {showDivider && <Divider />}
      <div className={dialogContent}>
        {children}
      </div>
      {showDivider && <Divider />}
    </div>
  )
}

export default DialogBody
