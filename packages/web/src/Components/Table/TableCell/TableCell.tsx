import * as React from "react";
import MaterialTableCell from "@material-ui/core/TableCell";
import { ITableCellProps } from "./TableCell.props";

export { ITableCellProps } from "./TableCell.props";

export const TableCell = React.forwardRef<HTMLElement, ITableCellProps>(
  (props: ITableCellProps, ref) => <MaterialTableCell {...props} ref={ref} />,
);

TableCell.displayName = "TableCell";

export default TableCell;
