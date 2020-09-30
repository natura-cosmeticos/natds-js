import * as React from "react";
import { Story } from "@storybook/react";
import { Avatar as component } from "./Avatar";
import argTypes from "./Avatar.argTypes";

import colors from "./__fixtures__/colors";
import sizes from "./__fixtures__/sizes";

import { IAvatarProps } from "./Avatar.props";

const natNaturaImage = "https://pbs.twimg.com/profile_images/1308179129267781632/wLDnEiOy_400x400.jpg";
const Avatar : React.ForwardRefExoticComponent<IAvatarProps> = React.lazy(() => import("./Avatar"));

Avatar.displayName = "Avatar";

export default {
  argTypes,
  component,
  title: "Components/Avatar",
};

const Template : Story<IAvatarProps> = (args) => <Avatar {...args} />;

export const Playground : Story<IAvatarProps> = Template.bind({});
Playground.args = {
  alt: "Nat Natura holding a cat",
  color: colors.primary,
  src: natNaturaImage,
  size: sizes.huge,
};

export const Image : Story<IAvatarProps> = Template.bind({});
Image.args = {
  alt: "Nat Natura holding a cat",
  src: natNaturaImage,
  size: sizes.huge,
};

export const AnonymousWithDefaultFallbackIcon : Story<IAvatarProps> = Template.bind({});
AnonymousWithDefaultFallbackIcon.args = {
  color: colors.primary,
  size: sizes.huge,
};

export const Letter : Story<IAvatarProps> = Template.bind({});
Letter.args = {
  children: "T",
  color: colors.primary,
  size: sizes.huge,
};

export const PrimaryColor : Story<IAvatarProps> = Template.bind({});
PrimaryColor.args = {
  color: colors.primary,
  children: "P",
  size: sizes.standard,
};

export const SecondaryColor : Story<IAvatarProps> = Template.bind({});
SecondaryColor.args = {
  color: colors.secondary,
  children: "S",
  size: sizes.standard,
};

export const DefaultColor : Story<IAvatarProps> = Template.bind({});
DefaultColor.args = {
  color: colors.default,
  children: "D",
  size: sizes.standard,
};

export const TinySize : Story<IAvatarProps> = Template.bind({});
TinySize.args = {
  ...Image.args,
  size: sizes.tiny,
};

export const SmallSize : Story<IAvatarProps> = Template.bind({});
SmallSize.args = {
  ...Image.args,
  size: sizes.small,
};

export const StandardSize : Story<IAvatarProps> = Template.bind({});
StandardSize.args = {
  ...Image.args,
  size: sizes.standard,
};

export const LargeSize : Story<IAvatarProps> = Template.bind({});
LargeSize.args = {
  ...Image.args,
  size: sizes.large,
};

export const HugeSize : Story<IAvatarProps> = Template.bind({});
HugeSize.args = {
  ...Image.args,
  size: sizes.huge,
};
