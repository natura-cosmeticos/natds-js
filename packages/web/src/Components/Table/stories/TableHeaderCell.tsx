import * as React from "react";
import Checkbox from "../../Checkbox";
import Table from "../Table";
import TableCell from "../TableCell";
import TableHead from "../TableHead";
import TableRow from "../TableRow";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const TableHeaderCell = ({
  indeterminate,
}:{
    indeterminate?: boolean
  }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell align="center">
          <Checkbox color="primary" indeterminate={indeterminate}/>
        </TableCell>
      </TableRow>
    </TableHead>
  </Table>
);
