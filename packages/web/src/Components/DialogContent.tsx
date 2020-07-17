import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialDialogContent, {
  DialogContentProps as IDialogContentProps
} from '@material-ui/core/DialogContent';
export {
  DialogContentProps as IDialogContentProps
} from '@material-ui/core/DialogContent';

export const DialogContent: FunctionComponent<IDialogContentProps> = forwardRef((
  props: IDialogContentProps,
  ref: any
) => <MaterialDialogContent {...props} ref={ref} />);

export default withTheme(DialogContent);
