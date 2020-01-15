import * as React from 'react';
import MaterialSnackbar, { SnackbarProps as ISnackbarProps } from '@material-ui/core/Snackbar';
import { withTheme} from '@material-ui/core/styles';
export { SnackbarProps as ISnackbarProps } from '@material-ui/core/Snackbar';

export const Snackbar:React.FC<ISnackbarProps> = (props: ISnackbarProps) => {
  return <MaterialSnackbar {...props} />;
};

export default withTheme(Snackbar);
