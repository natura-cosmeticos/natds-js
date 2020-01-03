import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialDialogActions, {
  DialogActionsProps as IDialogActionsProps
} from '@material-ui/core/DialogActions';
export {
  DialogActionsProps as IDialogActionsProps
} from '@material-ui/core/DialogActions';

export const DialogActions: FunctionComponent<IDialogActionsProps> = (
  props: IDialogActionsProps
) => <MaterialDialogActions {...props} />;

export default withTheme(DialogActions);
