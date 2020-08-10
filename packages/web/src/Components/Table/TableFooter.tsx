import React, { FunctionComponent, forwardRef } from "react";
import MaterialTableFooter, {
  TableFooterProps as ITableFooterProps,
} from "@material-ui/core/TableFooter";
import { withTheme } from "@material-ui/core/styles";

export { TableFooterProps as ITableFooterProps } from "@material-ui/core/TableFooter";

export const TableFooter: FunctionComponent<ITableFooterProps> = forwardRef((
  props: ITableFooterProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => (
  <MaterialTableFooter {...props} ref={ref} />
));

TableFooter.displayName = "TableFooter";

export default withTheme(TableFooter);
