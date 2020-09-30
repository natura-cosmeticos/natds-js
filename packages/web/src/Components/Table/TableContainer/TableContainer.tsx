import * as React from "react";
import MaterialTableContainer from "@material-ui/core/TableContainer";
import { ITableContainerProps } from "./TableContainer.props";

export { ITableContainerProps } from "./TableContainer.props";

export const TableContainer = React.forwardRef<HTMLDivElement, ITableContainerProps>(
  (props: ITableContainerProps, ref) => <MaterialTableContainer {...props} ref={ref} />,
);

TableContainer.displayName = "TableContainer";

export default TableContainer;
