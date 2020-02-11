import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialDialog, { DialogProps as IDialogProps } from '@material-ui/core/Dialog';
export { DialogProps as IDialogProps } from '@material-ui/core/Dialog';

export const Dialog: FunctionComponent<IDialogProps> = forwardRef((
  props: IDialogProps, 
  ref: any
) => (
  <MaterialDialog {...props} ref={ref} />
));

export default withTheme(Dialog);
