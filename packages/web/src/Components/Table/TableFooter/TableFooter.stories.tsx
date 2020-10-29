import * as React from "react";
import { Story } from "@storybook/react";
import TableFooter, { ITableFooterProps } from "./TableFooter";
import { TableRow } from "../TableRow";
import { argTypes } from "./TableFooter.argTypes";

export default {
  argTypes,
  component: TableFooter,
  subcomponents: { TableRow },
  title: "Components/Table/Table Footer",
};

const Template : Story<ITableFooterProps> = (args: ITableFooterProps) => <TableFooter {...args} />;

export const Playground : Story<ITableFooterProps> = Template.bind({});
