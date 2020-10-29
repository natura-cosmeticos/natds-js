import { SnackbarProps, SnackbarOrigin } from "@material-ui/core/Snackbar";

export type HorizontalAnchorOrigin = SnackbarOrigin["horizontal"];
export type VerticalAnchorOrigin = SnackbarOrigin["vertical"];

export interface ISnackbarProps extends SnackbarProps {

  /**
   * The action to display.
   *
   * @optional
   * @type node
   */
  action?: SnackbarProps["action"]

  /**
   * The anchor of the `Snackbar`.
   * Defaults to `{ horizontal: "center", vertical: "bottom" }`
   *
   * @optional
   * @type { horizontal: "left" | "center" | "right", vertical: "top" | "bottom" }
   */
  anchorOrigin?: SnackbarProps["anchorOrigin"]

  /**
   * The number of milliseconds to wait before automatically calling the `onClose` function.
   *
   * `onClose` should then set the state of the `open` prop to hide the `Snackbar`.
   * This behavior is disabled by default with the `null` value.
   *
   * @default null
   * @type number
   */
  autoHideDuration?: SnackbarProps["autoHideDuration"]

  /**
   * Replace the `SnackbarContent` component.
   *
   * @optional
   * @type element
   */
  children?: SnackbarProps["children"]

  /**
   * Override or extend the styles applied to the component.
   *
   * @todo add link to Material UI CSS API
   * @type object
   */
  classes?: SnackbarProps["classes"]

  /**
   * Props applied to the `ClickAwayListener` element.
   *
   * @type object
   */
  ClickAwayListenerProps?: SnackbarProps["ClickAwayListenerProps"]

  /**
   * Props applied to the `SnackbarContent` element.
   *
   * @type object
   */
  ContentProps?: SnackbarProps["ContentProps"]

  /**
   * If `true`, the `autoHideDuration` timer will expire even if the window is not focused.
   *
   * @default false
   * @type bool
   */
  disableWindowBlurListener?: SnackbarProps["disableWindowBlurListener"]

  /**
   * When displaying multiple consecutive `Snackbar`s from a parent rendering a single `<Snackbar/>`,
   *
   * Add the `key` prop to ensure independent treatment of each message. e.g. `<Snackbar key={message} />`.
   * Otherwise, the message may update-in-place and features such as `autoHideDuration` may be canceled.
   *
   * @example `<Snackbar key={message} />`
   *
   * @type any
   */
  key?: SnackbarProps["key"]

  /**
   * The message to display.
   *
   * @type node
   */
  message?: SnackbarProps["message"]

  /**
   * Callback fired when the component requests to be closed.
   *
   * Typically `onClose` is used to set state in the parent component, which is used to control the `Snackbar` `open` prop.
   *
   * Signature: `function(event: object, reason: string) => void`
   *
   * @param {object} event The event source of the `callback.reason`. Can be: `"timeout"` (`autoHideDuration` expired) or: `clickaway`.
   * @param {string} reason The `reason` parameter can optionally be used to control the response to `onClose`, for example ignoring `clickaway`.
   * @return {void}
   *
   * @optional
   * @type func
   */
  onClose?: SnackbarProps["onClose"]

  /**
   * Callback fired before the transition is entering.
   *
   * @optional
   * @type func
   */
  onEnter?: SnackbarProps["onEnter"]

  /**
   * Callback fired when the transition has entered.
   *
   * @optional
   * @type func
   */
  onEntered?: SnackbarProps["onEntered"]

  /**
   * Callback fired when the transition is entering.
   *
   * @optional
   * @type func
   */
  onEntering?: SnackbarProps["onEntering"]

  /**
   * Callback fired before the transition is exiting.
   *
   * @optional
   * @type func
   */
  onExit?: SnackbarProps["onExit"]

  /**
   * Callback fired when the transition has exited.
   *
   * @optional
   * @type func
   */
  onExited?: SnackbarProps["onExited"]

  /**
   * Callback fired when the transition is exiting.
   *
   * @optional
   * @type func
   */
  onExiting?: SnackbarProps["onExiting"]

  /**
   * If `true`, `Snackbar` is open.
   *
   * @optional
   * @type bool
   */
  open?: SnackbarProps["open"]

  /**
   * The number of milliseconds to wait before dismissing after user interaction.
   *
   * If `autoHideDuration` prop isn't specified, it does nothing.
   * If `autoHideDuration` prop is specified but `resumeHideDuration` isn't, we default to `autoHideDuration` / 2 ms.
   *
   * @optional
   * @type number
   */
  resumeHideDuration?: SnackbarProps["resumeHideDuration"]

  /**
   * The component used for the transition. Defaults to `Grow`.
   *
   * @optional
   * @type element
   */
  TransitionComponent?: SnackbarProps["TransitionComponent"]

  /**
   * The duration for the transition, in milliseconds.
   *
   * You may specify a single timeout for all transitions, or individually with an `object`.
   * Defaults to `{ enter: duration.enteringScreen, exit: duration.leavingScreen }`
   *
   * @type number | { enter?: number, exit?: number }
   */
  transitionDuration?: SnackbarProps["transitionDuration"]

  /**
   * Props applied to the Transition element.
   *
   * @type object
   */
  TransitionProps?: SnackbarProps["TransitionProps"]
}
