import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { TableRow } from "./TableRow";
import { ITableRowProps } from "./TableRow.props";
import argTypes from "./TableRow.argTypes";
import { ITableProps } from "../Table.props";
import { ITableBodyProps } from "../TableBody";

const Table : React.ForwardRefExoticComponent<ITableProps> = React.lazy(() => import("../Table"));
const TableBody : React.ForwardRefExoticComponent<ITableBodyProps> = React.lazy(() => import("../TableBody"));

Table.displayName = "Table";
TableBody.displayName = "TableBody";

export default {
  argTypes,
  component: TableRow,
  title: "Components/Table/Table Row",
} as Meta;

const Template : Story<ITableRowProps> = (args: ITableRowProps) => (
  <Table>
    <TableBody>
      <TableRow {...args} />
    </TableBody>
  </Table>
);

export const Playground : Story<ITableRowProps> = Template.bind({});
