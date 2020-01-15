import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialListItemText, {
  ListItemTextProps as IListItemTextProps,
} from '@material-ui/core/ListItemText';
export { ListItemTextProps as IListItemTextProps } from '@material-ui/core/ListItemText';

const ListItemText: FunctionComponent<IListItemTextProps> = (
  props: IListItemTextProps
) => <MaterialListItemText {...props} />;

export default withTheme(ListItemText);
