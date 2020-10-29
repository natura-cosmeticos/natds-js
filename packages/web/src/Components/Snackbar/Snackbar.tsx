import * as React from "react";
import MaterialSnackbar from "@material-ui/core/Snackbar";

import { ISnackbarProps } from "./Snackbar.props";

export { ISnackbarProps } from "./Snackbar.props";

/**
 * Snackbars provide brief messages about app processes at some edge of the screen.
 *
 * For more advanced usages, check [Material UI Snackbar docs](https://material-ui.com/components/snackbars/)
 *
 * ## Importing
 *
 * ```
 * import { Snackbar } from "@naturacosmeticos/natds-web";
 * ```
 *
 * @see https://zeroheight.com/28db352be/v/latest/p/60e557-snackbar/b/51a722
 * @see https://material-ui.com/components/snackbars/
 */
export const Snackbar = React.forwardRef<unknown, ISnackbarProps>((
  props: ISnackbarProps, ref,
) => <MaterialSnackbar {...props} ref={ref} />);

Snackbar.displayName = "Snackbar";

export default Snackbar;
