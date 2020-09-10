import { Meta, Story } from "@storybook/react";
import { ISpacingProps } from "./Spacing.props";
import Template from "./Template";
import meta from "./Spacing.stories.meta";

export default {
  ...meta,
  title: "Components/Spacing",
} as Meta;

export const Playground : Story<ISpacingProps> = Template.bind({});
Playground.args = {
  children: "Try the margin and padding controls",
};
