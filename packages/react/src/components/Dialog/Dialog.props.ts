export interface DialogProps {
  /**
   * Use this attribute to describe the contents of the dialog.
   */
  ariaDescribedBy?: string

  /**
   * The value of the this attribute will be
   * the id of the element used to title the dialog.
   */
  ariaLabelledBy?: string
  /**
   * Component children, usually the included sub-components.
   */
  children: React.ReactNode

  /**
   * A `dialog` is a window overlaid on either the primary window or another dialog window
   *
   * An `alertdialog` is a modal dialog that interrupts the user's workflow to
   * communicate an important message and acquire a response.
   */
  role: 'dialog' | 'alertdialog'

  /**
   * If `true`, the `Dialog` is open.
   * @default false
   */
  showDialog?: boolean

  /**
   * Optional ID for testing
   */
  testID?: string
}
