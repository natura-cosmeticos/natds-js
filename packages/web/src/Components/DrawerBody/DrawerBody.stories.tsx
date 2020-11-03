import { Meta, Story } from "@storybook/react";
// eslint-disable-next-line no-use-before-define
import * as React from "react";
import { DrawerBody, IDrawerBodyProps } from "./DrawerBody";
import { Navigation } from "../DrawerMenu/DrawerMenu.stories";
import { DrawerMenu } from "../DrawerMenu";

export default {
  component: DrawerBody,
  title: "Components/Drawer/Drawer Body",
} as Meta;

const Template : Story<IDrawerBodyProps> = (args: IDrawerBodyProps) => <DrawerBody {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  children: <DrawerMenu {...Navigation.args} />,
};
