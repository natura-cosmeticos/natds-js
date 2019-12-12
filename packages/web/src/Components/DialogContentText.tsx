import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
export {
  DialogContentTextProps as IDialogContentTextProps,
} from '@material-ui/core/DialogContentText';
import MaterialDialogContentText, {
  DialogContentTextProps as IDialogContentTextProps,
} from '@material-ui/core/DialogContentText';

export const DialogContentText: FunctionComponent<IDialogContentTextProps> = (
  props: IDialogContentTextProps
) => <MaterialDialogContentText {...props} />;

export default withTheme(DialogContentText);
