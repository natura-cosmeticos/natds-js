import React, { FunctionComponent, forwardRef } from "react";
import MaterialTableContainer, {
  TableContainerProps as ITableContainerProps,
} from "@material-ui/core/TableContainer";
import { withTheme } from "@material-ui/core/styles";

export { TableContainerProps as ITableContainerProps } from "@material-ui/core/TableContainer";

export const TableContainer: FunctionComponent<ITableContainerProps> = forwardRef((
  props: ITableContainerProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => (
  <MaterialTableContainer {...props} ref={ref} />
));

TableContainer.displayName = "TableContainer";

export default withTheme(TableContainer);
