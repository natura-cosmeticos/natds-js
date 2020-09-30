import * as React from "react";
import { Story } from "@storybook/react";
import TableFooter, { ITableFooterProps } from "./TableFooter";

export default {
  component: TableFooter,
  title: "Components/Table/Table Footer",
};

const Template : Story<ITableFooterProps> = (args: ITableFooterProps) => <TableFooter {...args} />;

export const Playground : Story<ITableFooterProps> = Template.bind({});
