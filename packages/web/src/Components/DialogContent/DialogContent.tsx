import * as React from "react";
import MaterialDialogContent from "@material-ui/core/DialogContent";
import { IDialogContentProps } from "./DialogContent.props";

export { IDialogContentProps } from "./DialogContent.props";

/**
 * For more advanced usages, check [Material UI Dialog docs](https://material-ui.com/components/dialogs/)
 *
 * ## Importing
 *
 * ```
 * import { DialogContent } from '@naturacosmeticos/natds-web';
 * ```
 *
 * @see https://material-ui.com/components/dialogs/
 */
export const DialogContent = React.forwardRef<unknown, IDialogContentProps>(
  (props: IDialogContentProps, ref) => (
    <MaterialDialogContent {...props} ref={ref} />
  ),
);

DialogContent.displayName = "DialogContent";

export default DialogContent;
