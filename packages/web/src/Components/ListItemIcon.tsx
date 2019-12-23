import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialListItemIcon, {
  ListItemIconProps as IListItemIconProps,
} from '@material-ui/core/ListItemIcon';
export { ListItemIconProps as IListItemIconProps } from '@material-ui/core/ListItemIcon';

const ListItemIcon: FunctionComponent<IListItemIconProps> = (
  props: IListItemIconProps
) => <MaterialListItemIcon {...props} />;

export default withTheme(ListItemIcon);
