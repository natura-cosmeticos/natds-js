import React, { FunctionComponent, forwardRef } from "react";
import MaterialTableHead, {
  TableHeadProps as ITableHeadProps,
} from "@material-ui/core/TableHead";
import { withTheme } from "@material-ui/core/styles";

export { TableHeadProps as ITableHeadProps } from "@material-ui/core/TableHead";

export const TableHead: FunctionComponent<ITableHeadProps> = forwardRef((
  props: ITableHeadProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => (
  <MaterialTableHead {...props} ref={ref} />
));

TableHead.displayName = "TableHead";

export default withTheme(TableHead);
