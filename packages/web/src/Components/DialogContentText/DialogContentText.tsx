import * as React from "react";
import MaterialDialogContentText from "@material-ui/core/DialogContentText";
import { IDialogContentTextProps } from "./DialogContentText.props";

/**
 * For more advanced usages, check [Material UI Dialog docs](https://material-ui.com/components/dialogs/)
 *
 * ## Importing
 *
 * ```
 * import { DialogContentText } from '@naturacosmeticos/natds-web';
 * ```
 *
 * @see https://material-ui.com/components/dialogs/
 */
export const DialogContentText = React.forwardRef<HTMLSpanElement, IDialogContentTextProps>(
  (props: IDialogContentTextProps, ref) => (
    <MaterialDialogContentText {...props} ref={ref} />
  ),
);

DialogContentText.displayName = "DialogContextText";

export default DialogContentText;
