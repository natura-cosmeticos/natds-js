import * as React from "react";
import { Story } from "@storybook/react";
import * as IconStories from "../Icon/Icon.stories";
import { IconButton, IIconButtonProps } from "./IconButton";
import { Icon } from "../Icon";
import { argTypes } from "./IconButton.argTypes";
import { colors } from "./__fixtures__/colors";
import { sizes } from "./__fixtures__/sizes";

export default {
  argTypes,
  component: IconButton,
  subcomponents: { Icon },
  title: "Components/Icon Button",
};

const Template : Story<IIconButtonProps> = (args) => <IconButton {...args}>
  <Icon name={"outlined-action-add"} {...IconStories.SmallCloseIcon.args} />
</IconButton>;

const TemplateWithTinyIcon : Story<IIconButtonProps> = (args) => <IconButton {...args}>
  <Icon name={"outlined-action-add"} {...IconStories.TinyIcon.args} />
</IconButton>;

const TemplateForMenuButton : Story<IIconButtonProps> = (args) => <IconButton {...args}>
  <Icon name={"outlined-action-add"} {...IconStories.TinyMenuIcon.args} />
</IconButton>;

const TemplateWithSmallIcon : Story<IIconButtonProps> = (args) => <IconButton {...args}>
  <Icon name={"outlined-action-add"} {...IconStories.SmallIcon.args} />
</IconButton>;

export const Playground : Story<IIconButtonProps> = Template.bind({});
Playground.args = {
  color: colors.primary,
  disabled: false,
  size: sizes.medium,
};

export const PrimaryColor : Story<IIconButtonProps> = Template.bind({});
PrimaryColor.args = { color: colors.primary };
PrimaryColor.storyName = "Primary color";

export const SecondaryColor : Story<IIconButtonProps> = Template.bind({});
SecondaryColor.args = { color: colors.secondary };
SecondaryColor.storyName = "Secondary color";

export const InheritColor : Story<IIconButtonProps> = Template.bind({});
InheritColor.args = { color: colors.inherit };
InheritColor.storyName = "Inherit color";

export const DefaultColor : Story<IIconButtonProps> = Template.bind({});
DefaultColor.args = { color: colors.default };
DefaultColor.storyName = "Default color";

export const SmallWithTinyIcon = TemplateWithTinyIcon.bind({});
SmallWithTinyIcon.args = {
  ...PrimaryColor.args,
  children: IconStories.TinyIcon,
  size: sizes.small,
};

export const SmallWithSmallIcon = TemplateWithSmallIcon.bind({});
SmallWithSmallIcon.args = {
  ...PrimaryColor.args,
  children: IconStories.SmallIcon,
  size: sizes.small,
};

export const MediumWithTinyIcon = TemplateWithTinyIcon.bind({});
MediumWithTinyIcon.args = {
  ...PrimaryColor.args,
  children: IconStories.TinyIcon,
  size: sizes.medium,
};

export const MediumWithSmallIcon = TemplateWithSmallIcon.bind({});
MediumWithSmallIcon.args = {
  ...PrimaryColor.args,
  children: IconStories.SmallIcon,
  size: sizes.medium,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Playground.args,
  disabled: true,
};

export const MenuButtonExample = TemplateForMenuButton.bind({});
MenuButtonExample.args = {
  "aria-label": "Toggle menu",
  children: IconStories.TinyMenuIcon,
  color: "inherit",
  edge: "start",
};
