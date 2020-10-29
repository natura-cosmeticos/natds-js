import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { DrawerHeader, IDrawerHeaderProps } from "./DrawerHeader";

export default {
  component: DrawerHeader,
  title: "Components/Drawer/Drawer Header",
} as Meta;

const Template : Story<IDrawerHeaderProps> = (args: IDrawerHeaderProps) => <DrawerHeader {...args} />;

export const Playground : Story<IDrawerHeaderProps> = Template.bind({});
Playground.args = {
  avatarSrc: "https://pbs.twimg.com/profile_images/1308179129267781632/wLDnEiOy_400x400.jpg",
  primary: "Hello, Long Name Lorem ipsum dolor sit amet...",
  secondary: "Option",
};
