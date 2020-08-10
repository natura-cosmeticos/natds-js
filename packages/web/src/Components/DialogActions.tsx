import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialDialogActions, {
  DialogActionsProps as IDialogActionsProps,
} from "@material-ui/core/DialogActions";

export {
  DialogActionsProps as IDialogActionsProps,
} from "@material-ui/core/DialogActions";

export const DialogActions: FunctionComponent<IDialogActionsProps> = forwardRef((
  props: IDialogActionsProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialDialogActions {...props} ref={ref} />);

DialogActions.displayName = "DialogActions";

export default withTheme(DialogActions);
