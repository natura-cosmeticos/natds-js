import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialDialogActions, {
  DialogActionsProps as IDialogActionsProps
} from '@material-ui/core/DialogActions';
export {
  DialogActionsProps as IDialogActionsProps
} from '@material-ui/core/DialogActions';

export const DialogActions: FunctionComponent<IDialogActionsProps> = forwardRef((
  props: IDialogActionsProps,
  ref: any
) => <MaterialDialogActions {...props} ref={ref} />);

export default withTheme(DialogActions);
