import React, { FunctionComponent, forwardRef } from "react";
import MaterialTableHead, {
  TableHeadProps as ITableHeadProps,
} from "@material-ui/core/TableHead";
import { withTheme } from "@material-ui/core/styles";

export { TableHeadProps as ITableHeadProps } from "@material-ui/core/TableHead";

export const TableHead: FunctionComponent<ITableHeadProps> = forwardRef((
  props: ITableHeadProps,
  ref: any,
) => (
  <MaterialTableHead {...props} ref={ref} />
));

export default withTheme(TableHead);
