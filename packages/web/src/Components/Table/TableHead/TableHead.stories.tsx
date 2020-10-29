import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Table } from "../Table";
import { TableHead } from "./TableHead";
import { ITableHeadProps } from "./TableHead.props";
import { argTypes } from "./TableHead.argTypes";
import { TableCell } from "../TableCell";
import { Checkbox } from "../../Checkbox";
import { Indeterminate, ForTableHeader } from "../../Checkbox/Checkbox.stories";
import { TableRow } from "../TableRow";
import { TableSortLabel } from "../TableSortLabel";
import { Playground as TableSortLabelPlayground } from "../TableSortLabel/TableSortLabel.stories";

export default {
  argTypes,
  component: TableHead,
  subcomponents: { TableRow },
  title: "Components/Table/Table Head",
} as Meta;

const Template : Story<ITableHeadProps> = (args : ITableHeadProps) => <Table>
  <TableHead {...args}>
    <TableRow>
      <TableCell align={"center"}>
        {args.children}
      </TableCell>
    </TableRow>
  </TableHead>
</Table>;

export const Playground : Story<ITableHeadProps> = Template.bind({});
Playground.args = {
  children: "Header cell with text",
};

export const WithCheckbox : Story<ITableHeadProps> = Template.bind({});
WithCheckbox.args = {
  children: <Checkbox {...ForTableHeader.args} />,
};

export const WithIndeterminateCheckbox : Story<ITableHeadProps> = Template.bind({});
WithIndeterminateCheckbox.args = {
  children: <Checkbox {...Indeterminate.args} />,
};

export const WithTableSort : Story<ITableHeadProps> = Template.bind({});
WithTableSort.args = {
  children: <TableSortLabel {...TableSortLabelPlayground.args} />,
};
