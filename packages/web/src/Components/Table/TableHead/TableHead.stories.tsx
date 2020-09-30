import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Table } from "../Table";
import { TableHead } from "./TableHead";
import { ITableHeadProps } from "./TableHead.props";
import { argTypes } from "./TableHead.argTypes";

export default {
  argTypes,
  component: TableHead,
  title: "Components/Table/Table Head",
} as Meta;

const Template : Story<ITableHeadProps> = (args : ITableHeadProps) => <Table><TableHead {...args} /></Table>;

export const Playground : Story<ITableHeadProps> = Template.bind({});
