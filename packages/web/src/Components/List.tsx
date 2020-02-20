import React, { FunctionComponent, forwardRef } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialList, { ListProps as IListProps } from '@material-ui/core/List';
export { ListProps as IListProps } from '@material-ui/core/List';

const List: FunctionComponent<IListProps> = forwardRef((
  props: IListProps,
  ref: any
) => (
  <MaterialList {...props} ref={ref} />
));

export default withTheme(List);
