import React, { FunctionComponent, forwardRef } from "react";
import MaterialTableCell, {
  TableCellProps as ITableCellProps,
} from "@material-ui/core/TableCell";
import { withTheme } from "@material-ui/core/styles";

export { TableCellProps as ITableCellProps } from "@material-ui/core/TableCell";

export const TableCell: FunctionComponent<ITableCellProps> = forwardRef((
  props: ITableCellProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => (
  <MaterialTableCell {...props} ref={ref} />
));

TableCell.displayName = "TableCell";

export default withTheme(TableCell);
