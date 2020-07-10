import React, { FunctionComponent, forwardRef } from 'react';
import MaterialTableFooter, {
  TableFooterProps as ITableFooterProps,
} from '@material-ui/core/TableFooter';
import { withTheme } from '@material-ui/core/styles';
export { TableFooterProps as ITableFooterProps } from '@material-ui/core/TableFooter';

export const TableFooter: FunctionComponent<ITableFooterProps> = forwardRef((
  props: ITableFooterProps,
  ref: any
) => (
  <MaterialTableFooter {...props} ref={ref} />
));

export default withTheme(TableFooter);