import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { CardHeader } from "./CardHeader";
import { ICardHeaderProps } from "./CardHeader.props";
import { Avatar } from "../Avatar";
import { Playground as AvatarPlayground } from "../Avatar/Avatar.stories";
import { IconButton } from "../IconButton";
import { NavigationMoreButtonExample } from "../IconButton/IconButton.stories";
import { Typography } from "../Typography";
import { Body1, Body2 } from "../Typography/Typography.stories";

export default {
  component: CardHeader,
  subcomponents: { Avatar },
  title: "Components/Card/Card Header",
} as Meta;

const Template : Story<ICardHeaderProps> = (args: ICardHeaderProps) => (
  <CardHeader {...args} />
);

export const Playground : Story<ICardHeaderProps> = Template.bind({});
Playground.args = {
  avatar: <Avatar {...AvatarPlayground.args} />,
  action: <IconButton {...NavigationMoreButtonExample.args} />,
  subheader: "Subheader text",
  title: "Title text",
};

export const WithCustomTypography : Story<ICardHeaderProps> = Template.bind({});
WithCustomTypography.args = {
  ...Playground.args,
  disableTypography: true,
  subheader: <Typography {...Body2.args}>Subheader text with body2 variant</Typography>,
  title: <Typography {...Body1.args}>Title text with body1 variant</Typography>,
};
