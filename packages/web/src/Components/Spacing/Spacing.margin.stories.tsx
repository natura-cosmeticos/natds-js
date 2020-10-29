import { tokens } from "@naturacosmeticos/natds-styles";
import { Meta, Story } from "@storybook/react";
import { ISpacingProps } from "./Spacing.props";
import Template from "./Template";
import meta from "./Spacing.stories.meta";

export default {
  ...meta,
  title: "Utilities/Spacing/Margin",
} as Meta;

const { sizes } = tokens;

export const VeryHugeMargin : Story<ISpacingProps> = Template.bind({});
VeryHugeMargin.args = {
  margin: "veryHuge",
};
VeryHugeMargin.storyName = `Very Huge Margin (${sizes.veryHuge}px)`;

export const HugeMargin : Story<ISpacingProps> = Template.bind({});
HugeMargin.args = { margin: "huge" };
HugeMargin.storyName = `Huge Margin (${sizes.huge}px)`;

export const HugeTopMargin : Story<ISpacingProps> = Template.bind({});
HugeTopMargin.args = { marginTop: "huge" };
HugeTopMargin.storyName = `Huge Top Margin (${sizes.huge}px)`;

export const LargeXHorizontalMargin : Story<ISpacingProps> = Template.bind({});
LargeXHorizontalMargin.args = { marginX: "largeX" };
LargeXHorizontalMargin.storyName = `LargeX Horizontal Margin (${sizes.largeX}px)`;

export const LargeRightMargin : Story<ISpacingProps> = Template.bind({});
LargeRightMargin.args = { marginRight: "large" };
LargeRightMargin.storyName = `Large Right Margin (${sizes.large}px)`;

export const SemiXMarginY : Story<ISpacingProps> = Template.bind({});
SemiXMarginY.args = { marginY: "semiX" };
SemiXMarginY.storyName = `SemiX Vertical Margin (${sizes.semiX}px)`;

export const SemiBottomMargin : Story<ISpacingProps> = Template.bind({});
SemiBottomMargin.args = { marginBottom: "semi" };
SemiBottomMargin.storyName = `Semi Bottom Margin (${sizes.semi}px)`;

export const StandardVerticalMargin : Story<ISpacingProps> = Template.bind({});
StandardVerticalMargin.args = { marginY: "standard" };
StandardVerticalMargin.storyName = `Standard Vertical Margin (${sizes.standard}px)`;

export const StandardLeftMargin : Story<ISpacingProps> = Template.bind({});
StandardLeftMargin.args = { marginLeft: "standard" };
StandardLeftMargin.storyName = `Standard Left Margin (${sizes.standard}px)`;

export const SmallHorizontalMargin : Story<ISpacingProps> = Template.bind({});
SmallHorizontalMargin.args = { marginX: "small" };
SmallHorizontalMargin.storyName = `Small Horizontal Margin (${sizes.small}px)`;

export const SmallTopMargin : Story<ISpacingProps> = Template.bind({});
SmallTopMargin.args = { marginTop: "small" };
SmallTopMargin.storyName = `Small Top Margin (${sizes.small}px)`;

export const SmallRightMargin : Story<ISpacingProps> = Template.bind({});
SmallRightMargin.args = { marginRight: "small" };
SmallRightMargin.storyName = `Small Right Margin (${sizes.small}px)`;

export const TinyMargin : Story<ISpacingProps> = Template.bind({});
TinyMargin.args = { margin: "tiny" };
TinyMargin.storyName = `Tiny Margin (${sizes.tiny}px)`;

export const TinyVerticalMargin : Story<ISpacingProps> = Template.bind({});
TinyVerticalMargin.args = { marginY: "tiny" };
TinyVerticalMargin.storyName = `Tiny Vertical Margin (${sizes.tiny}px)`;

export const TinyRightMargin : Story<ISpacingProps> = Template.bind({});
TinyRightMargin.args = { marginRight: "tiny" };
TinyRightMargin.storyName = `Tiny Right Margin (${sizes.tiny}px)`;

export const MicroBottomMargin: Story<ISpacingProps> = Template.bind({});
MicroBottomMargin.args = { marginBottom: "micro" };
MicroBottomMargin.storyName = `Micro Bottom Margin (${sizes.micro})`;

export const MicroRightMargin : Story<ISpacingProps> = Template.bind({});
MicroRightMargin.args = { marginRight: "micro" };
MicroRightMargin.storyName = `Micro Right Margin (${sizes.micro})`;

export const NoMargin : Story<ISpacingProps> = Template.bind({});
NoMargin.args = { margin: "none" };
NoMargin.storyName = `No Margin (${sizes.none}px)`;
