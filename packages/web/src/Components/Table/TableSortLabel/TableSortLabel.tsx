import * as React from "react";
import MaterialTableSortLabel from "@material-ui/core/TableSortLabel";
import { ITableSortLabelProps } from "./TableSortLabel.props";

export const TableSortLabel = React.forwardRef<HTMLSpanElement, ITableSortLabelProps>(
  (props: ITableSortLabelProps, ref) => <MaterialTableSortLabel {...props} ref={ref} />,
);
TableSortLabel.displayName = "TableSortLabel";
export default TableSortLabel;
