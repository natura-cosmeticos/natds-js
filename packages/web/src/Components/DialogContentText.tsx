import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialDialogContentText, {
  DialogContentTextProps as IDialogContentTextProps,
} from "@material-ui/core/DialogContentText";

export {
  DialogContentTextProps as IDialogContentTextProps,
} from "@material-ui/core/DialogContentText";

export const DialogContentText: FunctionComponent<IDialogContentTextProps> = forwardRef((
  props: IDialogContentTextProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialDialogContentText {...props} ref={ref} />);

DialogContentText.displayName = "DialogContextText";

export default withTheme(DialogContentText);
