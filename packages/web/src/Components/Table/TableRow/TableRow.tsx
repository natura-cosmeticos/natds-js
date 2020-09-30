import * as React from "react";
import MaterialTableRow from "@material-ui/core/TableRow";
import { ITableRowProps } from "./TableRow.props";
import { useStyles } from "./TableRow.styles";

export const TableRow = React.forwardRef<HTMLTableRowElement, ITableRowProps>(
  (props: ITableRowProps,
    ref) => {
    const { classes, ...otherProps } = props;
    const customClasses = useStyles();

    return (
      <MaterialTableRow
        {...otherProps}
        classes={{ ...customClasses, ...classes }}
        ref={ref}
      />);
  },
);

TableRow.displayName = "TableRow";
export default TableRow;
