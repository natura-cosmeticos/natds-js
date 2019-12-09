import React, { FunctionComponent } from 'react';

import MaterialDialogTitle, {
  DialogTitleProps,
} from '@material-ui/core/DialogTitle';
import { withTheme } from '@material-ui/styles';

const DialogTitle: FunctionComponent<DialogTitleProps> = (
  props: DialogTitleProps
) => <MaterialDialogTitle {...props} />;

export default withTheme(DialogTitle);
