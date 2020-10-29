/* eslint-disable max-lines */
import { Story } from "@storybook/react";
import * as React from "react";
import { SmallIcon, TinyIcon } from "../Icon/Icon.stories";
import { IconButton, IIconButtonProps } from "./IconButton";
import { Icon } from "../Icon";
import { argTypes } from "./IconButton.argTypes";
import { colors } from "./__fixtures__/colors";
import { sizes } from "./__fixtures__/sizes";
import { Template } from "./Template";
import { WithFilterIcon } from "../Badge/Badge.stories";
import { Badge } from "../Badge";

export default {
  argTypes,
  component: IconButton,
  subcomponents: { Icon },
  title: "Components/Icon Button",
};

export const Playground : Story<IIconButtonProps> = Template.bind({});
Playground.args = {
  color: colors.primary,
  disabled: false,
  size: sizes.medium,
};

export const PrimaryColor : Story<IIconButtonProps> = Template.bind({});
PrimaryColor.args = { color: colors.primary };

export const SecondaryColor : Story<IIconButtonProps> = Template.bind({});
SecondaryColor.args = { color: colors.secondary };

export const InheritColor : Story<IIconButtonProps> = Template.bind({});
InheritColor.args = { color: colors.inherit };

export const DefaultColor : Story<IIconButtonProps> = Template.bind({});
DefaultColor.args = { color: colors.default };

export const SmallWithTinyIcon = Template.bind({});
SmallWithTinyIcon.args = {
  ...PrimaryColor.args,
  children: <Icon {...TinyIcon.args} name={"filled-default-mockup"} />,
  size: sizes.small,
};

export const SmallWithSmallIcon = Template.bind({});
SmallWithSmallIcon.args = {
  ...PrimaryColor.args,
  children: <Icon {...SmallIcon.args} name={"filled-default-mockup"} />,
  size: sizes.small,
};

export const MediumWithTinyIconAndPrimaryColor = Template.bind({});
MediumWithTinyIconAndPrimaryColor.args = {
  ...PrimaryColor.args,
  children: <Icon {...TinyIcon.args} name={"filled-default-mockup"} />,
  size: sizes.medium,
};

export const MediumWithTinyIconAndSecondaryColor = Template.bind({});
MediumWithTinyIconAndSecondaryColor.args = {
  ...SecondaryColor.args,
  children: <Icon {...TinyIcon.args} name={"filled-default-mockup"} />,
  size: sizes.medium,
};

export const MediumWithTinyIconAndDefaultColor = Template.bind({});
MediumWithTinyIconAndDefaultColor.args = {
  ...DefaultColor.args,
  children: <Icon {...TinyIcon.args} name={"filled-default-mockup"} />,
  size: sizes.medium,
};

export const MediumWithSmallIcon = Template.bind({});
MediumWithSmallIcon.args = {
  ...PrimaryColor.args,
  children: <Icon {...SmallIcon.args} name={"filled-default-mockup"} />,
  size: sizes.medium,
};

export const Disabled = Template.bind({});
Disabled.args = { ...Playground.args, disabled: true };

export const MenuButtonExample = Template.bind({});
MenuButtonExample.args = {
  "aria-label": "Toggle menu",
  children: <Icon {...TinyIcon.args} name={"filled-navigation-menu"} />,
  color: colors.inherit,
  edge: "start",
};

export const SearchButtonExample = Template.bind({});
SearchButtonExample.args = {
  "aria-label": "Search",
  children: <Icon {...TinyIcon.args} name={"outlined-action-search"} />,
  color: colors.inherit,
  edge: "start",
};

export const CloseButtonExample = Template.bind({});
CloseButtonExample.args = {
  "aria-label": "Close",
  children: <Icon {...TinyIcon.args} name={"outlined-navigation-close"} />,
  color: colors.inherit,
};

export const FilterButtonExample = Template.bind({});
FilterButtonExample.args = {
  "aria-label": "Filter",
  children: <Badge {...WithFilterIcon.args} />,
  color: colors.inherit,
  edge: "start",
};

export const MyProfileButtonExample = Template.bind({});
MyProfileButtonExample.args = {
  "aria-label": "My Profile",
  children: <Icon {...TinyIcon.args} name={"outlined-social-myprofile"} />,
  color: colors.inherit,
  edge: "start",
};

export const NavigationMoreButtonExample = Template.bind({});
NavigationMoreButtonExample.args = {
  "aria-label": "More",
  children: <Icon {...TinyIcon.args} name={"filled-navigation-more"} />,
};

export const AddToFavoritesExample = Template.bind({});
AddToFavoritesExample.args = {
  "aria-label": "Add to favorites",
  children: <Icon {...TinyIcon.args} name={"outlined-action-love"} />,
};

export const ShareExample = Template.bind({});
ShareExample.args = {
  "aria-label": "Share",
  children: <Icon {...TinyIcon.args} name={"outlined-action-share"} />,
};

export const ExpandExample = Template.bind({});
ExpandExample.args = {
  "aria-expanded": false,
  "aria-label": "Show more options",
  children: <Icon {...TinyIcon.args} name={"outlined-navigation-arrowbottom"} />,
};
