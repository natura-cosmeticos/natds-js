import { Meta, Story } from "@storybook/react";
import { tokens } from "@naturacosmeticos/natds-styles";
import { ISpacingProps } from "./Spacing.props";
import Template from "./Template";
import meta from "./Spacing.stories.meta";

export default {
  ...meta,
  title: "Utilities/Spacing/Padding",
} as Meta;

const {
  huge, large, micro, none, semi, small, standard, tiny,
} = tokens.sizes;

export const HugePadding : Story<ISpacingProps> = Template.bind({});
HugePadding.args = { padding: "huge" };
HugePadding.storyName = `Huge padding (${huge}px)`;

export const LargePadding : Story<ISpacingProps> = Template.bind({});
LargePadding.args = { padding: "large" };
LargePadding.storyName = `Large padding (${large}px)`;

export const SemiPadding : Story<ISpacingProps> = Template.bind({});
SemiPadding.args = { padding: "semi" };
SemiPadding.storyName = `Semi padding (${semi}px)`;

export const StandardPadding : Story<ISpacingProps> = Template.bind({});
StandardPadding.args = { padding: "standard" };
StandardPadding.storyName = `Standard padding (${standard}px)`;

export const SmallPadding : Story<ISpacingProps> = Template.bind({});
SmallPadding.args = { padding: "small" };
SmallPadding.storyName = `Small padding (${small}px)`;

export const TinyPadding : Story<ISpacingProps> = Template.bind({});
TinyPadding.args = { padding: "tiny" };
TinyPadding.storyName = `Tiny padding (${tiny}px)`;

export const MicroPadding : Story<ISpacingProps> = Template.bind({});
MicroPadding.args = { padding: "micro" };
MicroPadding.storyName = `Micro padding (${micro}px)`;

export const HugeTopPadding : Story<ISpacingProps> = Template.bind({});
HugeTopPadding.args = { paddingTop: "huge" };
HugeTopPadding.storyName = `Huge top padding (${huge}px)`;

export const LargeRightPadding : Story<ISpacingProps> = Template.bind({});
LargeRightPadding.args = { paddingRight: "large" };
LargeRightPadding.storyName = `Large right padding (${large}px)`;

export const SemiVerticalPadding : Story<ISpacingProps> = Template.bind({});
SemiVerticalPadding.args = { paddingY: "semi" };
SemiVerticalPadding.storyName = `Semi vertical padding (${semi}px)`;

export const SemiBottomPadding : Story<ISpacingProps> = Template.bind({});
SemiBottomPadding.args = { paddingBottom: "semi" };
SemiBottomPadding.storyName = `Semi bottom padding (${semi}px)`;

export const StandardLeftPadding : Story<ISpacingProps> = Template.bind({});
StandardLeftPadding.args = { paddingLeft: "standard" };
StandardLeftPadding.storyName = `Standard left padding (${standard}px)`;

export const SmallHorizontalPadding : Story<ISpacingProps> = Template.bind({});
SmallHorizontalPadding.args = { paddingX: "small" };
SmallHorizontalPadding.storyName = `Small horizontal padding (${small}px)`;

export const SmallTopPadding : Story<ISpacingProps> = Template.bind({});
SmallTopPadding.args = { paddingTop: "small" };
SmallTopPadding.storyName = `Small top padding (${small}px)`;

export const TinyRightPadding : Story<ISpacingProps> = Template.bind({});
TinyRightPadding.args = { paddingRight: "small" };
TinyRightPadding.storyName = `Tiny right padding (${tiny}px)`;

export const MicroBottomPadding : Story<ISpacingProps> = Template.bind({});
MicroBottomPadding.args = { paddingBottom: "micro" };
MicroBottomPadding.storyName = `Micro bottom padding (${micro}px)`;

export const NoPadding : Story<ISpacingProps> = Template.bind({});
NoPadding.args = { padding: "none" };
NoPadding.storyName = `No padding (${none}px)`;
