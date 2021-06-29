import React from 'react'
import styles from './Dialog.styles'
import { DialogProps } from './Dialog.props'

const Dialog = ({
  children,
  testID,
  openDialog = false
}: DialogProps): JSX.Element => {
  const { wrapper, dialog } = styles()

  return (
    <>
      {openDialog && (
        <div className={wrapper}>
          <section data-testid={testID} className={dialog}>
            {children}
          </section>
        </div>
      )}
    </>
  )
}

export default Dialog
