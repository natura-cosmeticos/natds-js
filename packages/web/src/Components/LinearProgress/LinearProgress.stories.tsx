import { Meta, Story } from "@storybook/react";
import { ILinearProgressProps, LinearProgress } from "./LinearProgress";
import { colors } from "./__fixtures__/colors";
import { variants } from "./__fixtures__/variants";
import { Template, DynamicTemplate } from "./Template";

export default {
  component: LinearProgress,
  title: "Components/Linear Progress Indicator",
} as Meta;

export const Playground : Story<ILinearProgressProps> = Template.bind({});
Playground.args = {
  color: colors.primary,
  value: 50,
  valueBuffer: 70,
  variant: variants.indeterminate,
};

export const PrimaryColor : Story<ILinearProgressProps> = Template.bind({});
PrimaryColor.args = {
  color: colors.primary,
};

export const SecondaryColor : Story<ILinearProgressProps> = Template.bind({});
SecondaryColor.args = {
  color: colors.secondary,
};

export const DeterminateVariant : Story<ILinearProgressProps> = Template.bind({});
DeterminateVariant.args = {
  color: colors.primary,
  value: 70,
  variant: variants.determinate,
};

export const IndeterminateVariant : Story<ILinearProgressProps> = Template.bind({});
IndeterminateVariant.args = {
  color: colors.primary,
  value: null,
  variant: variants.indeterminate,
};

export const BufferVariant : Story<ILinearProgressProps> = Template.bind({});
BufferVariant.args = {
  color: colors.primary,
  value: 35,
  valueBuffer: 50,
  variant: variants.buffer,
};

export const QueryVariant : Story<ILinearProgressProps> = Template.bind({});
QueryVariant.args = {
  color: colors.primary,
  value: null,
  variant: variants.query,
};

export const DeterminateLiveExample : Story<ILinearProgressProps> = DynamicTemplate.bind({});
DeterminateLiveExample.args = {
  color: colors.primary,
  value: 0,
  variant: variants.determinate,
};
DeterminateLiveExample.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};

export const BufferLiveExample : Story<ILinearProgressProps> = DynamicTemplate.bind({});
BufferLiveExample.args = {
  color: colors.primary,
  value: 0,
  valueBuffer: 10,
  variant: variants.buffer,
};
BufferLiveExample.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};
