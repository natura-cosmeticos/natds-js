import * as React from "react";
import { Story } from "@storybook/react";
import { TableSortLabel } from "./TableSortLabel";
import { argTypes } from "./TableSortLabel.argTypes";
import { ITableSortLabelProps } from "./TableSortLabel.props";
import { TableHead } from "../TableHead";
import { TableRow } from "../TableRow";
import { TableCell } from "../TableCell";
import Table from "../Table";

export default {
  argTypes,
  component: TableSortLabel,
  title: "Components/Table/Table Sort Label",
};

const Template : Story<ITableSortLabelProps> = (args: ITableSortLabelProps) => <Table>
  <TableHead>
    <TableRow>
      <TableCell align={"center"}>
        <TableSortLabel {...args} />
      </TableCell>
    </TableRow>
  </TableHead>
</Table>;

export const Playground : Story<ITableSortLabelProps> = Template.bind({});
Playground.args = {
  children: "Cell with sort icon",
  onClick: () => Function.prototype(),
};

export const Active : Story<ITableSortLabelProps> = Template.bind({});
Active.args = {
  ...Playground.args,
  active: true,
};

export const DescOrder : Story<ITableSortLabelProps> = Template.bind({});
DescOrder.args = {
  ...Playground.args,
  active: true,
  direction: "desc",
};

export const AscOrder : Story<ITableSortLabelProps> = Template.bind({});
AscOrder.args = {
  ...Playground.args,
  active: true,
  direction: "asc",
};
