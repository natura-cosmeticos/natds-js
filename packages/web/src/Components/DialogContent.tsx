import React, { FunctionComponent } from 'react';

import MaterialDialogContent, {
  DialogContentProps,
} from '@material-ui/core/DialogContent';
import { withTheme } from '@material-ui/styles';

const DialogContent: FunctionComponent<DialogContentProps> = (
  props: DialogContentProps
) => <MaterialDialogContent {...props} />;

export default withTheme(DialogContent);
