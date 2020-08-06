import React, { FunctionComponent, forwardRef } from "react";
import MaterialTableSortLabel, {
  TableSortLabelProps as ITableSortLabelProps,
} from "@material-ui/core/TableSortLabel";
import { withTheme } from "@material-ui/core/styles";

export { TableSortLabelProps as ITableSortLabelProps } from "@material-ui/core/TableSortLabel";

export const TableSortLabel: FunctionComponent<ITableSortLabelProps> = forwardRef((
  props: ITableSortLabelProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => (
  <MaterialTableSortLabel {...props} ref={ref} />
));

TableSortLabel.displayName = "TableSortLabel";

export default withTheme(TableSortLabel);
