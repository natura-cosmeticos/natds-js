import React, { FunctionComponent, forwardRef } from 'react';
import MaterialSnackbar, { SnackbarProps as ISnackbarProps } from '@material-ui/core/Snackbar';
import { withTheme} from '@material-ui/core/styles';
export { SnackbarProps as ISnackbarProps } from '@material-ui/core/Snackbar';

export const Snackbar: FunctionComponent<ISnackbarProps> = forwardRef((
  props: ISnackbarProps,
  ref: any
) => <MaterialSnackbar {...props} ref={ref} />);

export default withTheme(Snackbar);
