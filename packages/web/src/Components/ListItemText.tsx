import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialListItemText, {
  ListItemTextProps as IListItemTextProps,
} from '@material-ui/core/ListItemText';
export { ListItemTextProps as IListItemTextProps } from '@material-ui/core/ListItemText';

const ListItemText: FunctionComponent<IListItemTextProps> = forwardRef((
  props: IListItemTextProps,
  ref: any
) => (
  <MaterialListItemText {...props} ref={ref} />
));

export default withTheme(ListItemText);
