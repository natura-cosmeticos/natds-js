import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialMenuItem, { MenuItemProps as IMenuItemProps } from '@material-ui/core/MenuItem';
export { MenuItemProps as IMenuItemProps } from '@material-ui/core/MenuItem';

const MenuItem: FunctionComponent<IMenuItemProps> = (props: IMenuItemProps) => {
  const { button } = props;
  return (
    <MaterialMenuItem {...props} button={button as true | undefined} />
  );
};

export default withTheme(MenuItem);
