import { tokens } from "@naturacosmeticos/natds-styles";
import { Meta, Story } from "@storybook/react";
import { ISpacingProps } from "./Spacing.props";
import Template from "./Template";
import meta from "./Spacing.stories.meta";

export default {
  ...meta,
  title: "Components/Spacing/Margin",
} as Meta;

const {
  huge,
  large,
  micro,
  none,
  semi,
  small,
  standard,
  tiny,
} = tokens.sizes;

export const HugeMargin : Story<ISpacingProps> = Template.bind({});
HugeMargin.args = { margin: "huge" };
HugeMargin.storyName = `Huge margin (${huge}px)`;

export const HugeTopMargin : Story<ISpacingProps> = Template.bind({});
HugeTopMargin.args = { marginTop: "huge" };
HugeTopMargin.storyName = `Huge top margin (${huge}px)`;

export const LargeRightMargin : Story<ISpacingProps> = Template.bind({});
LargeRightMargin.args = { marginRight: "large" };
LargeRightMargin.storyName = `Large right margin (${large}px)`;

export const SemiBottomMargin : Story<ISpacingProps> = Template.bind({});
SemiBottomMargin.args = { marginBottom: "semi" };
SemiBottomMargin.storyName = `Semi bottom margin (${semi}px)`;

export const StandardVerticalMargin : Story<ISpacingProps> = Template.bind({});
StandardVerticalMargin.args = { marginY: "standard" };
StandardVerticalMargin.storyName = `Standard vertical margin (${standard}px)`;

export const StandardLeftMargin : Story<ISpacingProps> = Template.bind({});
StandardLeftMargin.args = { marginLeft: "standard" };
StandardLeftMargin.storyName = `Standard left margin (${standard}px)`;

export const SmallHorizontalMargin : Story<ISpacingProps> = Template.bind({});
SmallHorizontalMargin.args = { marginX: "small" };
SmallHorizontalMargin.storyName = `Small horizontal margin (${small}px)`;

export const SmallTopMargin : Story<ISpacingProps> = Template.bind({});
SmallTopMargin.args = { marginTop: "small" };
SmallTopMargin.storyName = `Small top margin (${small}px)`;

export const SmallRightMargin : Story<ISpacingProps> = Template.bind({});
SmallRightMargin.args = { marginRight: "small" };
SmallRightMargin.storyName = `Small right margin (${small}px)`;

export const TinyMargin : Story<ISpacingProps> = Template.bind({});
TinyMargin.args = { margin: "tiny" };
TinyMargin.storyName = `Tiny margin (${tiny}px)`;

export const TinyRightMargin : Story<ISpacingProps> = Template.bind({});
TinyRightMargin.args = { marginRight: "tiny" };
TinyRightMargin.storyName = `Tiny right margin (${tiny}px)`;

export const MicroBottomMargin: Story<ISpacingProps> = Template.bind({});
MicroBottomMargin.args = { marginBottom: "micro" };
MicroBottomMargin.storyName = `Micro bottom margin (${micro})`;

export const NoMargin : Story<ISpacingProps> = Template.bind({});
NoMargin.args = { margin: "none" };
NoMargin.storyName = `No margin (${none}px)`;
