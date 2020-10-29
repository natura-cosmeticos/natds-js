import * as React from "react";
import { Story } from "@storybook/react";
import { Button, IButtonProps } from "./Button";
import { Icon } from "../Icon";
import { colors } from "./__fixtures__/colors";
import { sizes } from "./__fixtures__/sizes";
import { variants } from "./__fixtures__/variants";
import { Template, TemplateWithColors, TemplateWithSizes } from "./Template";

export default { component: Button, title: "Components/Button" };

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
  startIcon: <Icon name={"outlined-action-favorite"} />,
};

export const EndIcon : Story<IButtonProps> = Template.bind({});
EndIcon.args = {
  ...Playground.args,
  endIcon: <Icon name={"outlined-action-favorite"} />,
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

export const ForSnackbar : Story<IButtonProps> = Template.bind({});
ForSnackbar.args = {
  ...Playground.args,
  color: colors.inherit,
  variant: variants.text,
};

export const ForDialogActions : Story<IButtonProps> = Template.bind({});
ForDialogActions.args = {
  children: "Action text",
  color: colors.primary,
  variant: variants.text,
};

export const Sizes : Story<IButtonProps> = TemplateWithSizes.bind({});
Sizes.args = Playground.args;

/**
 * @todo Check if small size is still part of UI specs
 */
export const SmallSize : Story<IButtonProps> = Template.bind({});
SmallSize.args = {
  ...Playground.args,
  size: sizes.small,
};

export const MediumSize : Story<IButtonProps> = Template.bind({});
MediumSize.args = {
  ...Playground.args,
  size: sizes.medium,
};

export const LargeSize : Story<IButtonProps> = Template.bind({});
LargeSize.args = {
  ...Playground.args,
  size: sizes.large,
};

export const FullWidth : Story<IButtonProps> = TemplateWithSizes.bind({});
FullWidth.args = {
  ...Playground.args,
  fullWidth: true,
};

export const ForActions : Story<IButtonProps> = TemplateWithSizes.bind({});
ForActions.args = {
  children: "Button label",
  size: sizes.small,
};
