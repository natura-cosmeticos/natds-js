import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialDialog, { DialogProps as IDialogProps } from '@material-ui/core/Dialog';
export { DialogProps as IDialogProps } from '@material-ui/core/Dialog';

const Dialog: FunctionComponent<IDialogProps> = (props: IDialogProps) => (
  <MaterialDialog {...props} />
);

export default withTheme(Dialog);
