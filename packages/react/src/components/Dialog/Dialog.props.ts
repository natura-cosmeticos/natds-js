export interface DialogProps {
  /**
   * The value of this attribute will be the **id**
   * of the element used to describe the **dialog content**.
   */
  ariaDescribedBy?: string

  /**
   * The value of this attribute will be the **id**
   * of the element used for the **dialog title**.
   */
  ariaLabelledBy?: string

  /**
   * Component children, usually the Dialog sub-components.
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
