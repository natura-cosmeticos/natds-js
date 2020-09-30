import * as React from "react";
import MaterialTablePagination from "@material-ui/core/TablePagination";
import { ITablePaginationProps } from "./TablePagination.props";

export const TablePagination = React.forwardRef<unknown, ITablePaginationProps>(
  (props: ITablePaginationProps, ref) => <MaterialTablePagination {...props} ref={ref} />,
);

TablePagination.displayName = "TablePagination";

export default TablePagination;
