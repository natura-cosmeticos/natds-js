import * as React from "react";
import MaterialDialog from "@material-ui/core/Dialog";
import { IDialogProps } from "./Dialog.props";

export { IDialogProps } from "./Dialog.props";

export const Dialog = React.forwardRef<unknown, IDialogProps>(
  (props: IDialogProps, ref) => (
    <MaterialDialog {...props} ref={ref} />
  ),
);

Dialog.displayName = "Dialog";

export default Dialog;
