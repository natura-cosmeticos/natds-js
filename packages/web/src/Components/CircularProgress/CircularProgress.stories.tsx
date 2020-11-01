import { Meta, Story } from "@storybook/react";
import { CircularProgress } from "./CircularProgress";
import { ICircularProgressProps } from "./CircularProgress.props";
import { colors } from "./__fixtures__/colors";
import { variants } from "./__fixtures__/variants";
import { DynamicTemplate, Template, TemplateForStatic } from "./Template";

export default {
  component: CircularProgress,
  title: "Components/Circular Progress Indicator",
} as Meta;

export const Playground : Story<ICircularProgressProps> = Template.bind({});
Playground.args = {
  color: colors.primary,
  disableShrink: false,
  size: 40,
  thickness: 3.6,
  value: 70,
  variant: variants.indeterminate,
};

export const PrimaryColor : Story<ICircularProgressProps> = Template.bind({});
PrimaryColor.args = {
  ...Playground.args,
  color: colors.primary,
};

export const SecondaryColor : Story<ICircularProgressProps> = Template.bind({});
SecondaryColor.args = {
  ...Playground.args,
  color: colors.secondary,
};

export const DefaultColor : Story<ICircularProgressProps> = Template.bind({});
DefaultColor.args = {
  ...Playground.args,
  color: colors.inherit,
};

export const DeterminateVariant : Story<ICircularProgressProps> = Template.bind({});
DeterminateVariant.args = {
  ...Playground.args,
  value: 70,
  variant: variants.determinate,
};

export const IndeterminateVariant : Story<ICircularProgressProps> = Template.bind({});
IndeterminateVariant.args = {
  ...Playground.args,
  variant: variants.indeterminate,
};

export const StaticVariantWithValue5 : Story<ICircularProgressProps> = Template.bind({});
StaticVariantWithValue5.args = {
  ...Playground.args,
  value: 5,
  variant: variants.static,
};

export const StaticVariantWithValue25 : Story<ICircularProgressProps> = Template.bind({});
StaticVariantWithValue25.args = {
  ...Playground.args,
  value: 25,
  variant: variants.static,
};

export const StaticVariantWithValue75 : Story<ICircularProgressProps> = Template.bind({});
StaticVariantWithValue75.args = {
  ...Playground.args,
  value: 75,
  variant: variants.static,
};

export const StaticVariantWithValue100 : Story<ICircularProgressProps> = Template.bind({});
StaticVariantWithValue100.args = {
  ...Playground.args,
  value: 100,
  variant: variants.static,
};

export const DeterminateLiveExample : Story<ICircularProgressProps> = DynamicTemplate.bind({});
DeterminateLiveExample.args = DeterminateVariant.args;
DeterminateLiveExample.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};

export const StaticLiveExample : Story<ICircularProgressProps> = TemplateForStatic.bind({});
StaticLiveExample.args = StaticVariantWithValue5.args;

export const DisableShrink : Story<ICircularProgressProps> = Template.bind({});
DisableShrink.args = {
  ...IndeterminateVariant.args,
  disableShrink: true,
};
