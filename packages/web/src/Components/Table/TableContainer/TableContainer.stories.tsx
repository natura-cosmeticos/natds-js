import * as React from "react";
import { Meta, Story } from "@storybook/react";
import TableContainer, { ITableContainerProps } from "./TableContainer";
import { argTypes } from "./TableContainer.argTypes";

export default {
  argTypes,
  component: TableContainer,
  title: "Components/Table/Table Container",
} as Meta;

const Template : Story<ITableContainerProps> = (args: ITableContainerProps) => <TableContainer {...args} />;

export const Playground : Story<ITableContainerProps> = Template.bind({});
