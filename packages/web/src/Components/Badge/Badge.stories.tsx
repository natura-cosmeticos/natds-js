import { Meta, Story } from "@storybook/react";
import Badge from "./Badge";
import { IBadgeProps } from "./Badge.props";
import { colors } from "./__fixtures__/colors";
import { variants } from "./__fixtures__/variants";
import { anchorOrigins } from "./__fixtures__/anchorOrigins";
import Template, { TemplateWithShapes } from "./Template";
import { argTypes } from "./Badge.argTypes";
import { overlaps } from "./__fixtures__/overlaps";

export default {
  argTypes,
  component: Badge,
  title: "Components/Badge",
} as Meta;

export const Playground : Story<IBadgeProps> = Template.bind({});
Playground.args = {
  anchorOrigin: anchorOrigins.topRight,
  badgeContent: "999",
  color: colors.primary,
  invisible: false,
  max: 99,
  overlap: overlaps.circle,
  showZero: false,
  variant: variants.standard,
};

export const DefaultColor : Story<IBadgeProps> = Template.bind({});
DefaultColor.args = {
  ...Playground.args,
  color: colors.default,
};

export const ErrorColor : Story<IBadgeProps> = Template.bind({});
ErrorColor.args = {
  ...Playground.args,
  color: colors.error,
};

export const PrimaryColor : Story<IBadgeProps> = Template.bind({});
PrimaryColor.args = {
  ...Playground.args,
  color: colors.primary,
};

export const SecondaryColor : Story<IBadgeProps> = Template.bind({});
SecondaryColor.args = {
  ...Playground.args,
  color: colors.secondary,
};

export const DotVariant : Story<IBadgeProps> = Template.bind({});
DotVariant.args = {
  ...Playground.args,
  variant: variants.dot,
};

export const StandardVariant : Story<IBadgeProps> = Template.bind({});
StandardVariant.args = {
  ...Playground.args,
  variant: variants.standard,
};

export const TopLeftAnchor : Story<IBadgeProps> = Template.bind({});
TopLeftAnchor.args = {
  ...Playground.args,
  anchorOrigin: anchorOrigins.topLeft,
};

export const TopRightAnchor : Story<IBadgeProps> = Template.bind({});
TopRightAnchor.args = {
  ...Playground.args,
  anchorOrigin: anchorOrigins.topRight,
};

export const BottomLeftAnchor : Story<IBadgeProps> = Template.bind({});
BottomLeftAnchor.args = {
  ...Playground.args,
  anchorOrigin: anchorOrigins.bottomLeft,
};

export const BottomRightAnchor : Story<IBadgeProps> = Template.bind({});
BottomRightAnchor.args = {
  ...Playground.args,
  anchorOrigin: anchorOrigins.bottomRight,
};

export const CircleOverlap : Story<IBadgeProps> = TemplateWithShapes.bind({});
CircleOverlap.args = {
  ...Playground.args,
  overlap: overlaps.circle,
};

export const RectangleOverlap : Story<IBadgeProps> = TemplateWithShapes.bind({});
RectangleOverlap.args = {
  ...Playground.args,
  overlap: overlaps.rectangle,
};
