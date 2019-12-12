import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialDialogTitle, {
  DialogTitleProps as IDialogTitleProps,
} from '@material-ui/core/DialogTitle';
export {
  DialogTitleProps as IDialogTitleProps,
} from '@material-ui/core/DialogTitle';

export const DialogTitle: FunctionComponent<IDialogTitleProps> = (
  props: IDialogTitleProps
) => <MaterialDialogTitle {...props} />;

export default withTheme(DialogTitle);
