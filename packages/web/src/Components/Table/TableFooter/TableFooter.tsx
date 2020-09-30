import * as React from "react";
import MaterialTableFooter from "@material-ui/core/TableFooter";
import { ITableFooterProps } from "./TableFooter.props";

export { ITableFooterProps } from "./TableFooter.props";

export const TableFooter = React.forwardRef<HTMLTableSectionElement, ITableFooterProps>(
  (props: ITableFooterProps, ref) => <MaterialTableFooter {...props} ref={ref} />,
);

TableFooter.displayName = "TableFooter";

export default TableFooter;
