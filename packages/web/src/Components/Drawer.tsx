import React, { FunctionComponent } from 'react';
import MaterialDrawer, { DrawerProps as IDrawerProps, } from '@material-ui/core/Drawer';
import { withTheme } from '@material-ui/core';
export { DrawerProps as IDrawerProps } from '@material-ui/core/Drawer';

const Drawer: FunctionComponent<IDrawerProps> = (props: IDrawerProps) => (
  <MaterialDrawer {...props} />
);

export default withTheme(Drawer);
