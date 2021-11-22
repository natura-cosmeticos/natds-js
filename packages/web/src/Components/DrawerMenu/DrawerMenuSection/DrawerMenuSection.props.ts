import { CollapseProps } from '@material-ui/core'
import * as React from 'react'
import { IDrawerMenuItemProps } from '../DrawerMenuItem'

export interface IDrawerMenuSectionProps extends IDrawerMenuItemProps {
  list?: Array<unknown>;
  onToggle?: (event: React.SyntheticEvent, state: boolean, name?: string) => void;
  opened?: boolean;
  unmountOnExit?: CollapseProps['unmountOnExit']
}
