import React, { FunctionComponent, forwardRef } from "react";
import MaterialTablePagination, {
  TablePaginationProps as ITablePaginationProps,
} from "@material-ui/core/TablePagination";
import { withTheme } from "@material-ui/core/styles";

export { TablePaginationProps as ITablePaginationProps } from "@material-ui/core/TablePagination";

export const TablePagination: FunctionComponent<ITablePaginationProps> = forwardRef((
  props: ITablePaginationProps,
  ref: any,
) => (
  <MaterialTablePagination {...props} ref={ref} />
));

export default withTheme(TablePagination);
