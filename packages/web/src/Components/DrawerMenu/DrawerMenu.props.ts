import * as React from 'react'
import { IDrawerMenuItemProps } from './DrawerMenuItem'

export interface IDrawerMenuProps {
  children?: React.ReactNode;
  component?: React.ElementType;
  list?: Array<IDrawerMenuItemProps>;
}
