import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialMenu, { MenuProps as IMenuProps } from '@material-ui/core/Menu';
export { MenuProps as IMenuProps } from '@material-ui/core/Menu';

const Menu: FunctionComponent<IMenuProps> = (props: IMenuProps) => (
  <MaterialMenu {...props} />
);

export default withTheme(Menu);
