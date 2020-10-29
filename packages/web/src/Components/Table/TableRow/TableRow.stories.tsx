import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { TableRow } from "./TableRow";
import { ITableRowProps } from "./TableRow.props";
import { argTypes } from "./TableRow.argTypes";
import { ITableProps } from "../Table.props";
import { ITableBodyProps } from "../TableBody";
import { ITableCellProps } from "../TableCell";

const Table : React.ForwardRefExoticComponent<ITableProps> = React.lazy(() => import("../Table"));
const TableBody : React.ForwardRefExoticComponent<ITableBodyProps> = React.lazy(() => import("../TableBody"));
const TableCell : React.ForwardRefExoticComponent<ITableCellProps> = React.lazy(() => import("../TableCell"));

Table.displayName = "Table";
TableBody.displayName = "TableBody";
TableCell.displayName = "TableCell";

export default {
  argTypes,
  component: TableRow,
  title: "Components/Table/Table Row",
} as Meta;

const Template : Story<ITableRowProps> = (args: ITableRowProps) => (
  <Table>
    <TableBody>
      <TableRow {...args}>
        <TableCell>
          {args.children}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const Playground : Story<ITableRowProps> = Template.bind({});
Playground.args = {
  children: "Table row with cell",
};

export const Selected : Story<ITableRowProps> = Template.bind({});
Selected.args = {
  children: "Table row selected with cell",
  selected: true,
};
