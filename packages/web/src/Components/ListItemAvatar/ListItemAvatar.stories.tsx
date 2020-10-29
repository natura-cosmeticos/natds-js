import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { ListItemAvatar } from "./ListItemAvatar";
import { Avatar } from "../Avatar";
import { SmallSize } from "../Avatar/Avatar.stories";

export default {
  component: ListItemAvatar,
  subcomponents: { Avatar },
  title: "Components/List/List Item Avatar",
} as Meta;

const Template : Story = (args) => (
  <ListItemAvatar {...args}>{args.children}</ListItemAvatar>
);

export const Playground : Story = Template.bind({});
Playground.args = {
  children: <Avatar {...SmallSize.args} />,
};
