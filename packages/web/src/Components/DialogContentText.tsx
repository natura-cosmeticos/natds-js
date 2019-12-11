import React, { FunctionComponent } from 'react';

import MaterialDialogContentText, {
  DialogContentTextProps,
} from '@material-ui/core/DialogContentText';
import { withTheme } from '@material-ui/styles';

const DialogContentText: FunctionComponent<DialogContentTextProps> = (
  props: DialogContentTextProps
) => <MaterialDialogContentText {...props} />;

export default withTheme(DialogContentText);
