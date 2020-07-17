import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialMenuItem, { MenuItemProps as IMenuItemProps } from '@material-ui/core/MenuItem';
export { MenuItemProps as IMenuItemProps } from '@material-ui/core/MenuItem';

const MenuItem: FunctionComponent<IMenuItemProps> = forwardRef((
  props: IMenuItemProps,
  ref: any
) => {
  const { button } = props;


  return (
    <MaterialMenuItem
      {...props}
      button={button as true | undefined}
      ref={ref}
    />
  );
});

export default withTheme(MenuItem);
