import { SnackbarContentProps } from "@material-ui/core/SnackbarContent";

export type ISnackbarContentColors =
  | "default"
  | "error"
  | "info"
  | "success"
  | "warning";

export interface ISnackbarContentProps extends Omit<SnackbarContentProps, "color" | "theme"> {

  /**
   * The action to display.
   *
   * @optional
   * @type node
   */
  action?: SnackbarContentProps["action"]

  /**
   * Override or extend the styles applied to the component. Check CSS API for more details.
   *
   * @todo add link to Material UI CSS API
   * @type object
   */
  classes?: SnackbarContentProps["classes"]

  /**
   * The color scheme to be applied to the content (including the background) based on the theme.
   *
   * Defaults to `"default"`.
   *
   * @default "default"
   * @optional
   * @type "default" | "error" | "success" | "warning" | "info"
   */
  color?: ISnackbarContentColors;

  /**
   * The message to display.
   *
   * @optional
   * @type node
   */
  message?: SnackbarContentProps["message"]

  /**
   * The `role` of the `SnackbarContent`.
   *
   * If the `Snackbar` requires focus to be closed, the `alertdialog` `role` should be used instead.
   *
   * @default "alert"
   * @type "alert" | "alertDialog"
   */
  role?: SnackbarContentProps["role"]
}
