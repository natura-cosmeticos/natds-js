import * as React from "react";
import MaterialTableHead from "@material-ui/core/TableHead";
import { ITableHeadProps } from "./TableHead.props";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TableHead = React.forwardRef<HTMLTableSectionElement, ITableHeadProps>(
  (props: ITableHeadProps, ref) => <MaterialTableHead {...props} ref={ref} />,
);

TableHead.displayName = "TableHead";

export default TableHead;
