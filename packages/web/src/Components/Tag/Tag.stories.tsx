import { Meta, Story } from "@storybook/react";
// eslint-disable-next-line no-use-before-define
import * as React from "react";
import { Tag } from "./Tag";
import { ITagProps } from "./Tag.props";
import { argTypes } from "./Tag.argTypes";
import { colors } from "./__fixtures__/colors";
import { sizes } from "./__fixtures__/sizes";
import { positions } from "./__fixtures__/positions";

export default {
  argTypes,
  component: Tag,
  title: "Components/Tag",
} as Meta;

const Template : Story<ITagProps> = (args: ITagProps) => <Tag id={args.id} {...args} />;

export const Playground : Story<ITagProps> = Template.bind({});
Playground.args = {
  children: "Example",
  color: colors.primary,
  id: "playground",
  size: sizes.small,
  position: positions.default,
};

export const Size : Story<ITagProps> = Template.bind({});
Size.args = {
  children: "Size",
  color: colors.primary,
  id: "size",
  size: sizes.small,
};

export const Position : Story<ITagProps> = Template.bind({});
Position.args = {
  children: "Position",
  color: colors.primary,
  id: "position",
  position: positions.default,
};

export const PrimaryColor : Story<ITagProps> = Template.bind({});
PrimaryColor.args = {
  children: "Primary",
  color: colors.primary,
  id: "primary",
};

export const SecondaryColor : Story<ITagProps> = Template.bind({});
SecondaryColor.args = {
  children: "Secondary",
  color: colors.secondary,
  id: "secondary",
};

export const InfoColor : Story<ITagProps> = Template.bind({});
InfoColor.args = {
  children: "Info",
  color: colors.info,
  id: "info",
};

export const ErrorColor : Story<ITagProps> = Template.bind({});
ErrorColor.args = {
  children: "Error",
  color: colors.error,
  id: "error",
};

export const WarningColor : Story<ITagProps> = Template.bind({});
WarningColor.args = {
  children: "Warning",
  color: colors.warning,
  id: "warning",
};

export const SuccessColor : Story<ITagProps> = Template.bind({});
SuccessColor.args = {
  children: "Success",
  color: colors.success,
  id: "success",
};

export const LightColor : Story<ITagProps> = Template.bind({});
LightColor.args = {
  children: "Light",
  color: colors.light,
  id: "light",
};

export const DarkColor : Story<ITagProps> = Template.bind({});
DarkColor.args = {
  children: "Dark",
  color: colors.dark,
  id: "dark",
};