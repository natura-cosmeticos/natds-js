import React from 'react'
import styles from './Dialog.styles'
import { DialogProps } from './Dialog.props'

const Dialog = ({
  ariaDescribedBy,
  ariaLabelledBy,
  children,
  role,
  size = 'medium',
  showDialog = false,
  testID
}: DialogProps): JSX.Element => {
  const screenSize = window.innerWidth
  const { dialog, overlay } = styles({ showDialog, size, screenSize })

  return (
    <>
      <section
        aria-describedby={ariaDescribedBy}
        aria-labelledby={ariaLabelledBy}
        aria-modal
        className={dialog}
        data-testid={testID}
        role={role}
      >
        {children}
      </section>
      <div className={overlay} />
    </>
  )
}

export default Dialog
