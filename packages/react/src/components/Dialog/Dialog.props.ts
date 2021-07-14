export type DialogSizes = 'small' | 'medium' | 'large'

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
   * The provided id's container will have the portal's children appended to it.
   * By default, it uses the `root` element of the top-level document object.
   */
  container?: string

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
   * The width of Dialog.
   * If the size of `dialog` is larger than the screen width, a width of `90vw` will be applied
   * @default medium
   */
  size?: DialogSizes

  /**
   * Optional ID for testing
   */
  testID?: string
}
