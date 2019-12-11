import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialDialogContent, {
  DialogContentProps as IDialogContentProps,
} from '@material-ui/core/DialogContent';
export {
  DialogContentProps as IDialogContentProps,
} from '@material-ui/core/DialogContent';

const DialogContent: FunctionComponent<IDialogContentProps> = (
  props: IDialogContentProps
) => <MaterialDialogContent {...props} />;

export default withTheme(DialogContent);
