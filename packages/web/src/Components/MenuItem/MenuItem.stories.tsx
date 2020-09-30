import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { MenuItem } from "./MenuItem";
import { IMenuItemProps } from "./MenuItem.props";
import { argTypes } from "./MenuItem.argTypes";

export default {
  argTypes,
  component: MenuItem,
  title: "Components/Menu/Menu Item",
} as Meta;

const Template : Story<IMenuItemProps> = (args: IMenuItemProps) => <MenuItem {...args} />;

export const Playground : Story<IMenuItemProps> = Template.bind({});
Playground.args = {
  children: "Item",
};
