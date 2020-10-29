import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { TableCell, ITableCellProps } from "./TableCell";
import { Table } from "../Table";
import { TableRow } from "../TableRow";
import { TableBody } from "../TableBody";
import { aligns } from "./__fixtures__/aligns";
import { Checkbox } from "../../Checkbox";
import { ForTableHeader } from "../../Checkbox/Checkbox.stories";
import { TableHead } from "../TableHead";
import { argTypes } from "./TableCell.argTypes";

export default {
  argTypes,
  component: TableCell,
  title: "Components/Table/Table Cell",
} as Meta;

const Template : Story<ITableCellProps> = (args: ITableCellProps) => (
  <Table>
    <TableBody>
      <TableRow>
        <TableCell {...args} />
      </TableRow>
    </TableBody>
  </Table>
);

const TemplateInsideTableHead : Story<ITableCellProps> = (args: ITableCellProps) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell {...args} />
      </TableRow>
    </TableHead>
  </Table>
);

export const Playground : Story<ITableCellProps> = Template.bind({});
Playground.args = {
  children: "Cell",
};

export const CenterAlign : Story<ITableCellProps> = Template.bind({});
CenterAlign.args = {
  align: aligns.center,
  children: "This is a slightly longer sample text to demonstrate centered alignment.",
};

export const LeftAlign : Story<ITableCellProps> = Template.bind({});
LeftAlign.args = {
  align: aligns.left,
  children: "This is a slightly longer sample text to demonstrate left alignment.",
};

export const RightAlign : Story<ITableCellProps> = Template.bind({});
RightAlign.args = {
  align: aligns.right,
  children: "This is a slightly longer sample text to demonstrate right alignment.",
};

export const HeaderCell : Story<ITableCellProps> = TemplateInsideTableHead.bind({});
HeaderCell.args = {
  children: "Header cell",
};

export const HeaderCellWithCheckbox : Story<ITableCellProps> = TemplateInsideTableHead.bind({});
HeaderCellWithCheckbox.args = {
  children: <Checkbox {...ForTableHeader.args} />,
};
