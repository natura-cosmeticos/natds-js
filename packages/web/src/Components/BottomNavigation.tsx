import * as React from 'react';
import MaterialBottomNavigation, { BottomNavigationProps as IBottomNavigationProps } from '@material-ui/core/BottomNavigation';
import { withTheme } from '@material-ui/core/styles';
export { BottomNavigationProps as IBottomNavigationProps } from '@material-ui/core/BottomNavigation';

export const BottomNavigation: React.FC<IBottomNavigationProps> = (props: IBottomNavigationProps) => {
  return <MaterialBottomNavigation {...props} />;
};

export default withTheme(BottomNavigation);
