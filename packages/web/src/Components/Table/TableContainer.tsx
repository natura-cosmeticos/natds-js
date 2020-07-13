import React, { FunctionComponent, forwardRef } from 'react';
import MaterialTableContainer, {
  TableContainerProps as ITableContainerProps,
} from '@material-ui/core/TableContainer';
import { withTheme } from '@material-ui/core/styles';
export { TableContainerProps as ITableContainerProps } from '@material-ui/core/TableContainer';

export const TableContainer: FunctionComponent<ITableContainerProps> = forwardRef((
  props: ITableContainerProps,
  ref: any
) => (
  <MaterialTableContainer {...props} ref={ref} />
));

export default withTheme(TableContainer);
