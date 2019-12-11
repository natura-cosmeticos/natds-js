import React, { FunctionComponent } from 'react';

import MaterialDialogActions, {
  DialogActionsProps,
} from '@material-ui/core/DialogActions';
import { withTheme } from '@material-ui/styles';

const DialogActions: FunctionComponent<DialogActionsProps> = (
  props: DialogActionsProps
) => <MaterialDialogActions {...props} />;

export default withTheme(DialogActions);
