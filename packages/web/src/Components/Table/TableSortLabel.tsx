import React, { FunctionComponent, forwardRef } from 'react';
import MaterialTableSortLabel, {
  TableSortLabelProps as ITableSortLabelProps,
} from '@material-ui/core/TableSortLabel';
import { withTheme } from '@material-ui/core/styles';
export { TableSortLabelProps as ITableSortLabelProps } from '@material-ui/core/TableSortLabel';

export const TableSortLabel: FunctionComponent<ITableSortLabelProps> = forwardRef((
  props: ITableSortLabelProps,
  ref: any
) => (
  <MaterialTableSortLabel {...props} ref={ref} />
));

export default withTheme(TableSortLabel);
