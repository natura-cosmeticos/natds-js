import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { ITableProps, Table } from "./Table";
import { TableBody } from "./TableBody";
import { TableCell } from "./TableCell";
import { TableContainer } from "./TableContainer";
import { TableFooter } from "./TableFooter";
import { TableHead } from "./TableHead";
import { TablePagination } from "./TablePagination";
import { TableRow } from "./TableRow";
import { TableSortLabel } from "./TableSortLabel";
import { argTypes } from "./Table.argTypes";

export default {
  argTypes,
  component: Table,
  subcomponents: {
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
  },
  title: "Components/Table",
} as Meta;

const Template : Story<ITableProps> = (args: ITableProps) => <TableContainer>
  <Table {...args}>
    <TableHead>
      <TableRow>
        <TableCell align={"center"} />
      </TableRow>
    </TableHead>
  </Table>
</TableContainer>;

export const Playground : Story<ITableProps> = Template.bind({});
Playground.args = {
  "aria-label": "Simple table",
  dividers: true,
  rounded: true,
  striped: true,
};
