import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { ContextualBadge } from "./ContextualBadge";
import { IContextualBadgeProps } from "./ContextualBadge.props";
import { argTypes } from "./ContextualBadge.argTypes";
import { colors } from "./__fixtures__/colors";
import { types } from "./__fixtures__/types";
import { ContextualBadgeContainer } from "./ContextualBadgeContainer";

export default {
  argTypes,
  component: ContextualBadge,
  subcomponents: { ContextualBadgeContainer },
  title: "Components/Contextual Badge (Tag)",
} as Meta;

const Template : Story<IContextualBadgeProps> = (args: IContextualBadgeProps) => <ContextualBadge id={args.id} {...args} />;

export const Playground : Story<IContextualBadgeProps> = Template.bind({});
Playground.args = {
  children: "Example",
  color: colors.primary,
  id: "playground",
  type: types.standard,
};

export const StandardType : Story<IContextualBadgeProps> = Template.bind({});
StandardType.args = {
  children: "Standard",
  color: colors.primary,
  id: "standard",
  type: types.standard,
};

export const PrimaryColor : Story<IContextualBadgeProps> = Template.bind({});
PrimaryColor.args = {
  children: "Primary",
  color: colors.primary,
  id: "primary",
};

export const SecondaryColor : Story<IContextualBadgeProps> = Template.bind({});
SecondaryColor.args = {
  children: "Secondary",
  color: colors.secondary,
  id: "secondary",
};

export const InfoColor : Story<IContextualBadgeProps> = Template.bind({});
InfoColor.args = {
  children: "Info",
  color: colors.info,
  id: "info",
};

export const ErrorColor : Story<IContextualBadgeProps> = Template.bind({});
ErrorColor.args = {
  children: "Error",
  color: colors.error,
  id: "error",
};

export const WarningColor : Story<IContextualBadgeProps> = Template.bind({});
WarningColor.args = {
  children: "Warning",
  color: colors.warning,
  id: "warning",
};

export const SuccessColor : Story<IContextualBadgeProps> = Template.bind({});
SuccessColor.args = {
  children: "Success",
  color: colors.success,
  id: "success",
};

export const LightColor : Story<IContextualBadgeProps> = Template.bind({});
LightColor.args = {
  children: "Light",
  color: colors.light,
  id: "light",
};

export const DarkColor : Story<IContextualBadgeProps> = Template.bind({});
DarkColor.args = {
  children: "Dark",
  color: colors.dark,
  id: "dark",
};
