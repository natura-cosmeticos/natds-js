import * as React from "react";
import MaterialTableBody from "@material-ui/core/TableBody";
import { ITableBodyProps } from "./TableBody.props";

export { ITableBodyProps } from "./TableBody.props";

export const TableBody = React.forwardRef<HTMLTableSectionElement, ITableBodyProps>(
  (props: ITableBodyProps, ref) => <MaterialTableBody {...props} ref={ref} />,
);

TableBody.displayName = "TableBody";

export default TableBody;
