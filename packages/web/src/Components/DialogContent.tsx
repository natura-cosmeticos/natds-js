import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialDialogContent, {
  DialogContentProps as IDialogContentProps,
} from "@material-ui/core/DialogContent";

export {
  DialogContentProps as IDialogContentProps,
} from "@material-ui/core/DialogContent";

export const DialogContent: FunctionComponent<IDialogContentProps> = forwardRef((
  props: IDialogContentProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialDialogContent {...props} ref={ref} />);

DialogContent.displayName = "DialogContent";

export default withTheme(DialogContent);
