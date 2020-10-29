import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { DrawerFooter, IDrawerFooterProps } from "./DrawerFooter";
import { DrawerMenu } from "../DrawerMenu";
import { FooterNavigation } from "../DrawerMenu/DrawerMenu.stories";

export default {
  component: DrawerFooter,
  title: "Components/Drawer/Drawer Footer",
} as Meta;

const Template : Story<IDrawerFooterProps> = (args: IDrawerFooterProps) => <DrawerFooter {...args} />;

export const Playground : Story<IDrawerFooterProps> = Template.bind({});

Playground.args = {
  children: <DrawerMenu {...FooterNavigation.args} />,
};
