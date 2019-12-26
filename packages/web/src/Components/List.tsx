import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialList, { ListProps as IListProps } from '@material-ui/core/List';
export { ListProps as IListProps } from '@material-ui/core/List';

const List: FunctionComponent<IListProps> = (props: IListProps) => (
  <MaterialList {...props} />
);

export default withTheme(List);
