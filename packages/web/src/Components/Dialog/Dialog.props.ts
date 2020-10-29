import { DialogProps } from "@material-ui/core/Dialog";

export interface IDialogProps extends DialogProps {

  /**
   * The id(s) of the element(s) that describe the dialog.
   *
   * @optional
   * @type string
   */
  "aria-describedby"?: DialogProps["aria-describedby"]

  /**
   * The id(s) of the element(s) that label the dialog.
   *
   * @optional
   * @type string
   */
  "aria-labelledby"?: DialogProps["aria-labelledby"]

  /**
   * Component children, usually the included sub-components.
   *
   * @required
   * @type node
   */
  children: DialogProps["children"]

  /**
   * If `true`, clicking the backdrop will not fire the `onClose` callback.
   *
   * @default false
   * @optional
   * @type bool
   */
  disableBackdropClick?: DialogProps["disableBackdropClick"]

  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   *
   * @default false
   * @optional
   * @type bool
   */
  disableEscapeKeyDown?: DialogProps["disableEscapeKeyDown"]

  /**
   * If `true`, the dialog will be full-screen.
   *
   * @default false
   * @optional
   * @type bool
   */
  fullScreen?: DialogProps["fullScreen"]

  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * @default false
   * @optional
   * @type bool
   */
  fullWidth?: DialogProps["fullWidth"]

  /**
   * Determine the max-width of the dialog.
   *
   * @default "sm"
   * @optional
   * @type "xs" | "sm" | "md" | "lg" | "xl"
   */
  maxWidth?: DialogProps["maxWidth"]

  /**
   * Callback fired when the backdrop is clicked.
   *
   * @optional
   * @type func
   */
  onBackdropClick?: DialogProps["onBackdropClick"]

  /**
   * Callback fired when the component requests to be closed.
   *
   * @optional
   * @type func
   */
  onClose?: DialogProps["onClose"]

  /**
   * Callback fired before the dialog enters.
   *
   * @optional
   * @type func
   */
  onEnter?: DialogProps["onEnter"]

  /**
   * Callback fired when the dialog has entered.
   *
   * @optional
   * @type func
   */
  onEntered?: DialogProps["onEntered"]

  /**
   * Callback fired when the dialog is entering.
   *
   * @optional
   * @type func
   */
  onEntering?: DialogProps["onEntering"]

  /**
   * Callback fired when the escape key is pressed, `disableKeyboard` is false and the modal is in focus.
   *
   * @optional
   * @type func
   */
  onEscapeKeyDown?: DialogProps["onEscapeKeyDown"]

  /**
   * Callback fired before the dialog exits.
   *
   * @optional
   * @type func
   */
  onExit?: DialogProps["onExit"]

  /**
   * Callback fired when the dialog has exited.
   *
   * @optional
   * @type func
   */
  onExited?: DialogProps["onExited"]

  /**
   * Callback fired when the dialog is exiting.
   *
   * @optional
   * @type func
   */
  onExiting?: DialogProps["onExiting"]

  /**
   * If `true`, the `Dialog` is open.
   *
   * @required
   * @type bool
   */
  open: DialogProps["open"]

  /**
   * The component used to render the body of the dialog. Defaults to `Paper`.
   *
   * @optional
   * @see Paper
   * @type element
   */
  PaperComponent?: DialogProps["PaperComponent"]

  /**
   * Props applied to the `Paper` element.
   *
   * @default {}
   * @optional
   * @see IPaperProps
   * @type IPaperProps | object
   */
  PaperProps?: DialogProps["PaperProps"]

  /**
   * Determine the container for scrolling the dialog.
   *
   * @default "paper"
   * @optional
   * @type "body" | "paper"
   */
  scroll?: DialogProps["scroll"]

  /**
   * The component used for the transition.
   *
   * Defaults to `Fade`.
   *
   * @optional
   * @type element
   */
  TransitionComponent?: DialogProps["TransitionComponent"]

  /**
   * The duration for the transition, in milliseconds.
   *
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Defaults to `{ enter: duration.enteringScreen, exit: duration.leavingScreen }`
   *
   * @optional
   * @type number | { enter?: number, exit?: number }
   */
  transitionDuration?: DialogProps["transitionDuration"]

  /**
   * Props applied to the `Transition` element.
   *
   * @optional
   * @type object
   */
  TransitionProps?: DialogProps["TransitionProps"]
}
