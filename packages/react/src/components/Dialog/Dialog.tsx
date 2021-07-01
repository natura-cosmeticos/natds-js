import React from 'react'
import styles from './Dialog.styles'
import { DialogProps } from './Dialog.props'

const Dialog = ({
  ariaDescribedBy,
  ariaLabelledBy,
  children,
  openDialog = false,
  testID
}: DialogProps): JSX.Element => {
  const { wrapper, dialog } = styles()

  return (
    <>
      {openDialog && (
        <div className={wrapper}>
          <div role="dialog" aria-labelledby={ariaLabelledBy} aria-describedby={ariaDescribedBy}>
            <section data-testid={testID} className={dialog}>
              {children}
            </section>
          </div>
        </div>
      )}
    </>
  )
}

export default Dialog
