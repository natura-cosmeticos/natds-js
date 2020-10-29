import { Story } from "@storybook/react";
import { Icon, IIconProps } from "./Icon";
import { argTypes } from "./Icon.argTypes";
import { Template, TemplateWithMultipleSizes } from "./Template";

export default {
  argTypes,
  component: Icon,
  title: "Components/Icon",
};

export const Playground : Story<IIconProps> = Template.bind({});

export const SmallIcon : Story<IIconProps> = Template.bind({});
SmallIcon.args = {
  size: "small",
};

export const TinyIcon: Story<IIconProps> = Template.bind({});
TinyIcon.args = {
  size: "tiny",
};

export const MicroIcon: Story<IIconProps> = Template.bind({});
MicroIcon.args = {
  size: "micro",
};

export const Sizes : Story<IIconProps> = TemplateWithMultipleSizes.bind({});
Sizes.args = Playground.args;
