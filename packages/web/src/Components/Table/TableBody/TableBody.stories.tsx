import { Meta, Story } from "@storybook/react";
import * as React from "react";
import TableBody, { ITableBodyProps } from "./TableBody";

export default {
  component: TableBody,
  title: "Components/Table/Table Body",
} as Meta;

const Template : Story<ITableBodyProps> = (args: ITableBodyProps) => <TableBody {...args} />;

export const Playground : Story<ITableBodyProps> = Template.bind({});
