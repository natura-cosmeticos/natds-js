import { Meta, Story } from "@storybook/react";
import { ISpacingProps } from "./Spacing.props";
import Template from "./Template";
import meta from "./Spacing.stories.meta";
import { LargeXHorizontalMargin, SmallHorizontalMargin, TinyVerticalMargin } from "./Spacing.margin.stories";

export default {
  ...meta,
  title: "Utilities/Spacing",
} as Meta;

export const Playground : Story<ISpacingProps> = Template.bind({});
Playground.args = {
  children: "Try the margin and padding controls",
};

export const ForFullWidthSubheader : Story<ISpacingProps> = Template.bind({});
ForFullWidthSubheader.args = {
  ...SmallHorizontalMargin.args,
  ...TinyVerticalMargin.args,
};

export const ForInsetSubheader : Story<ISpacingProps> = Template.bind({});
ForInsetSubheader.args = {
  ...LargeXHorizontalMargin.args,
  ...TinyVerticalMargin.args,
};
