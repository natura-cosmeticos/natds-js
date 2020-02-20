import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/styles';
export {
  DialogContentTextProps as IDialogContentTextProps,
} from '@material-ui/core/DialogContentText';
import MaterialDialogContentText, {
  DialogContentTextProps as IDialogContentTextProps,
} from '@material-ui/core/DialogContentText';

export const DialogContentText: FunctionComponent<IDialogContentTextProps> = forwardRef((
  props: IDialogContentTextProps,
  ref: any
) => (
  <MaterialDialogContentText {...props} ref={ref} />
));

export default withTheme(DialogContentText);
