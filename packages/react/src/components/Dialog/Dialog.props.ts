import { PortalProps } from '../Portal'

export type DialogSizes = 'small' | 'medium' | 'large'

export type DialogAccessibilityProps = {
  role?: 'dialog' | 'alertdialog';
  'aria-modal'?: boolean;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-label'?: string;
  tabIndex?: number;
};

export interface DialogProps {

  accessibility?: DialogAccessibilityProps;

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
   * Specify an optional className to be added to your Dialog
   */
  className?: string

  /**
   * An HTML element or function that returns one. This element will be used
   * as the container for the Dialog and can be used to control where it will be rendered
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
