import * as React from 'react';
import MaterialAppBar, { AppBarProps as IAppBarProps } from '@material-ui/core/AppBar';
import { withTheme } from '@material-ui/core/styles';
export { AppBarProps as IAppBarProps } from '@material-ui/core/AppBar';

export const AppBar: React.FC<IAppBarProps> = (props:IAppBarProps) => {
  return <MaterialAppBar {...props} />;
};

export default withTheme(AppBar);
