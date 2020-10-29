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
import Template from "./Template";

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

export const Playground : Story<ITableProps> = Template.bind({});
Playground.args = {
  "aria-label": "Simple table",
  dividers: true,
  rounded: true,
  striped: true,
};

export const Standard : Story<ITableProps> = Template.bind({});
Standard.args = {};

export const Rounded : Story<ITableProps> = Template.bind({});
Rounded.args = {
  rounded: true,
};

export const NoDividers : Story<ITableProps> = Template.bind({});
NoDividers.args = {
  dividers: false,
};

export const NoStripes : Story<ITableProps> = Template.bind({});
NoStripes.args = {
  striped: false,
};
