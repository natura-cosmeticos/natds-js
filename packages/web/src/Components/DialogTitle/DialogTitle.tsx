import * as React from "react";
import MaterialDialogTitle from "@material-ui/core/DialogTitle";
import { IDialogTitleProps } from "./DialogTitle.props";

export { IDialogTitleProps } from "./DialogTitle.props";

/**
 * For more advanced usages, check [Material UI Dialog docs](https://material-ui.com/components/dialogs/)
 *
 * ## Importing
 *
 * ```
 * import { DialogTitle } from '@naturacosmeticos/natds-web';
 * ```
 *
 * @see https://material-ui.com/components/dialogs/
 */
export const DialogTitle = React.forwardRef<unknown, IDialogTitleProps>(
  (props: IDialogTitleProps, ref) => (
    <MaterialDialogTitle {...props} ref={ref} />
  ),
);

DialogTitle.displayName = "DialogTitle";

export default DialogTitle;
