import { PortalProps } from '../Portal'

export type DialogSizes = 'small' | 'medium' | 'large'

export interface DialogProps {
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  ariaDescribedBy?: string

  /**
   * The id(s) of the element(s) that label the dialog.
   */
  ariaLabelledBy?: string

  /**
   * Dialog children, usually the included sub-components.
   */
  children: React.ReactNode

  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container?: PortalProps['container']

  /**
   * Callback fired when the escape key is pressed
   */
  onEscapeKeyDown?: React.KeyboardEventHandler<HTMLDivElement>

  /**
   * A `dialog` is a window overlaid on either the primary window or another dialog window
   *
   * An `alertdialog` is a modal dialog that interrupts the user's workflow to
   * communicate an important message and acquire a response.
   */
  role: 'dialog' | 'alertdialog'

  /**
   * If `true`, the Dialog is open.
   * @default false
   */
  open?: boolean

  /**
   * Determine the width of the dialog
   * If the size of `dialog` is larger than the screen width, a width of `90vw` will be applied
   * @default medium
   */
  size?: DialogSizes

  /**
   * Optional ID for testing
   */
  testID?: string
}
