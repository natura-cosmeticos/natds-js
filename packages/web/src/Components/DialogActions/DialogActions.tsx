import * as React from "react";
import MaterialDialogActions from "@material-ui/core/DialogActions";
import { IDialogActionsProps } from "./DialogActions.props";

export { IDialogActionsProps } from "./DialogActions.props";

/**
 * For more advanced usages, check [Material UI Dialog docs](https://material-ui.com/components/dialogs/)
 *
 * ## Importing
 *
 * ```
 * import { DialogActions } from '@naturacosmeticos/natds-web';
 * ```
 *
 * @see https://material-ui.com/components/dialogs/
 */
export const DialogActions = React.forwardRef<unknown, IDialogActionsProps>(
  (props: IDialogActionsProps, ref) => (
    <MaterialDialogActions {...props} ref={ref} />
  ),
);

DialogActions.displayName = "DialogActions";

export default DialogActions;
