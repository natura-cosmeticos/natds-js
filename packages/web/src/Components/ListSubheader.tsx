import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialListSubheader, {
  ListSubheaderProps as IListSubheaderProps,
} from '@material-ui/core/ListSubheader';
export { ListSubheaderProps as IListSubheaderProps } from '@material-ui/core/ListSubheader';

const ListSubheader: FunctionComponent<IListSubheaderProps> = (
  props: IListSubheaderProps
) => <MaterialListSubheader {...props} />;

export default withTheme(ListSubheader);
