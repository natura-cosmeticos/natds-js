import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { IMenuListProps, MenuList } from "./MenuList";

export default {
  component: MenuList,
  title: "Components/Menu/Menu List",
} as Meta;

export const Playground : Story<IMenuListProps> = (args: IMenuListProps) => <MenuList {...args} />;
