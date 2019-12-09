import React, { FunctionComponent } from 'react';

import MaterialDialog, { DialogProps } from '@material-ui/core/Dialog';
import { withTheme } from '@material-ui/styles';

const Dialog: FunctionComponent<DialogProps> = (props: DialogProps) => (
  <MaterialDialog {...props} />
);

export default withTheme(Dialog);
