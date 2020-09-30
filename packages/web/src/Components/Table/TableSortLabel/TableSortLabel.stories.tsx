import * as React from "react";
import { Story } from "@storybook/react";
import { TableSortLabel } from "./TableSortLabel";
import { argTypes } from "./TableSortLabel.argTypes";
import { ITableSortLabelProps } from "./TableSortLabel.props";

export default {
  argTypes,
  component: TableSortLabel,
  title: "Components/Table/Table Sort Label",
};

const Template : Story<ITableSortLabelProps> = (args: ITableSortLabelProps) => <TableSortLabel {...args} />;

export const Playground : Story<ITableSortLabelProps> = Template.bind({});
