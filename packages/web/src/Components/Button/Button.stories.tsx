import * as React from "react";
import { Story } from "@storybook/react";
import { Button, IButtonProps } from "./Button";
import { argTypes } from "./Button.argTypes";
import { Icon } from "../Icon";
import * as IconStories from "../Icon/Icon.stories";
import { colors } from "./__fixtures__/colors";
import { sizes } from "./__fixtures__/sizes";
import { variants } from "./__fixtures__/variants";

export default {
  argTypes,
  component: Button,
  title: "Components/Button",
};

const Template : Story<IButtonProps> = (args) => <Button {...args} />;

const TemplateWithColors : Story<IButtonProps> = (args) => <>
  <Button {...args} color={"primary"}>Primary color</Button>
  <Button {...args} color={"secondary"}>Secondary color</Button>
  <Button {...args} color={"default"}>Default color</Button>
</>;

const TemplateWithSizes : Story<IButtonProps> = (args) => <>
  <Button {...args} size={"small"}>Small size</Button>&nbsp;
  <Button {...args} size={"medium"}>Medium size</Button>&nbsp;
  <Button {...args} size={"large"}>Large size</Button>&nbsp;
</>;

export const Playground : Story<IButtonProps> = Template.bind({});
Playground.args = {
  children: "Button component text",
  color: colors.primary,
  endIcon: false,
  size: sizes.medium,
  startIcon: false,
  variant: variants.contained,
};

export const ContainedVariant : Story<IButtonProps> = Template.bind({});
ContainedVariant.args = {
  ...Playground.args,
  variant: "contained",
};

export const OutlinedVariant : Story<IButtonProps> = Template.bind({});
OutlinedVariant.args = {
  ...Playground.args,
  variant: "outlined",
};

export const TextVariant : Story<IButtonProps> = Template.bind({});
TextVariant.args = {
  ...Playground.args,
  variant: "text",
};

export const Disabled : Story<IButtonProps> = Template.bind({});
Disabled.args = {
  ...Playground.args,
  disabled: true,
};

export const StartIcon : Story<IButtonProps> = Template.bind({});
StartIcon.args = {
  ...Playground.args,
  startIcon: <Icon name={"outlined-action-favorite"} {...IconStories.OutlinedFavoriteIcon.args} />,
};

export const EndIcon : Story<IButtonProps> = Template.bind({});
EndIcon.args = {
  ...Playground.args,
  endIcon: <Icon name={"outlined-action-favorite"} {...IconStories.OutlinedFavoriteIcon.args} />,
};

export const Colors : Story<IButtonProps> = TemplateWithColors.bind({});
Colors.args = Playground.args;

export const InheritColor : Story<IButtonProps> = Template.bind({});
InheritColor.args = {
  ...Playground.args,
  color: colors.inherit,
};
InheritColor.parameters = {
  docs: {
    description: {
      story: "The `inherit` color is useful when you need to apply a button to an `AppBar`'s `Toolbar`.",
    },
  },
};

export const Sizes : Story<IButtonProps> = TemplateWithSizes.bind({});
Sizes.args = Playground.args;

export const FullWidth : Story<IButtonProps> = TemplateWithSizes.bind({});
FullWidth.args = {
  ...Playground.args,
  fullWidth: true,
};
