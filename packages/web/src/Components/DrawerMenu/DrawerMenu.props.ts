import * as React from 'react'
import { CollapseProps } from '@material-ui/core'
import { IDrawerMenuItemProps } from './DrawerMenuItem'

export interface IDrawerMenuProps {
  children?: React.ReactNode;
  component?: React.ElementType;
  list?: Array<IDrawerMenuItemProps>;
  unmountOnExit?: CollapseProps['unmountOnExit']
}
