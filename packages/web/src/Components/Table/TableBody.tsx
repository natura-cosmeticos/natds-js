import React, { FunctionComponent, forwardRef } from "react";
import MaterialTableBody, {
  TableBodyProps as ITableBodyProps,
} from "@material-ui/core/TableBody";
import { withTheme } from "@material-ui/core/styles";

export { TableBodyProps as ITableBodyProps } from "@material-ui/core/TableBody";

export const TableBody: FunctionComponent<ITableBodyProps> = forwardRef((
  props: ITableBodyProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => (
  <MaterialTableBody {...props} ref={ref} />
));

TableBody.displayName = "TableBody";

export default withTheme(TableBody);
