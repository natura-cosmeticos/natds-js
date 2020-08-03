import React, { FunctionComponent, forwardRef } from "react";
import MaterialTablePagination, {
  TablePaginationProps as ITablePaginationProps,
} from "@material-ui/core/TablePagination";
import { withTheme } from "@material-ui/core/styles";

export { TablePaginationProps as ITablePaginationProps } from "@material-ui/core/TablePagination";

export const TablePagination: FunctionComponent<ITablePaginationProps> = forwardRef((
  props: ITablePaginationProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => (
  <MaterialTablePagination {...props} ref={ref} />
));

TablePagination.displayName = "TablePagination";

export default withTheme(TablePagination);
