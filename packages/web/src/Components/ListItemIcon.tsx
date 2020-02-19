import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialListItemIcon, {
  ListItemIconProps as IListItemIconProps,
} from '@material-ui/core/ListItemIcon';
export { ListItemIconProps as IListItemIconProps } from '@material-ui/core/ListItemIcon';

export const ListItemIcon: FunctionComponent<IListItemIconProps> = forwardRef((
  props: IListItemIconProps,
  ref: any
) => (
  <MaterialListItemIcon {...props} ref={ref} />
));

export default withTheme(ListItemIcon);
