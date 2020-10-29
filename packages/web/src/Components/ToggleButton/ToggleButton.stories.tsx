import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { ToggleButton } from "./ToggleButton";
import { IToggleButtonProps } from "./ToggleButton.props";
import { colors } from "./__fixtures__/colors";
import { sizes } from "./__fixtures__/sizes";
import { Icon } from "../Icon";
import { SmallIcon, TinyIcon } from "../Icon/Icon.stories";

export default {
  component: ToggleButton,
  subcomponents: { Icon },
  title: "Components/Toggle Button",
} as Meta;

const Template : Story<IToggleButtonProps> = (args: IToggleButtonProps) => (
  <ToggleButton {...args} iconOff={args.iconOff} iconOn={args.iconOn} />
);

export const Playground : Story<IToggleButtonProps> = Template.bind({});
Playground.args = {
  color: colors.primary,
  checked: false,
  disabled: false,
  iconOff: <Icon {...SmallIcon.args} name={"outlined-action-check"} />,
  iconOn: <Icon {...SmallIcon.args} name={"filled-action-check"} />,
  size: sizes.medium,
};

export const InitiallyChecked : Story<IToggleButtonProps> = Template.bind({});
InitiallyChecked.args = {
  ...Playground.args,
  checked: true,
};

export const PrimaryColor : Story<IToggleButtonProps> = Template.bind({});
PrimaryColor.args = {
  ...Playground.args,
  color: colors.primary,
};

export const SecondaryColor : Story<IToggleButtonProps> = Template.bind({});
SecondaryColor.args = {
  ...Playground.args,
  color: colors.secondary,
};

export const DefaultColor : Story<IToggleButtonProps> = Template.bind({});
DefaultColor.args = {
  ...Playground.args,
  color: colors.default,
};

export const SmallWithTinyIcon : Story<IToggleButtonProps> = Template.bind({});
SmallWithTinyIcon.args = {
  ...PrimaryColor.args,
  iconOff: <Icon {...TinyIcon.args} name={"outlined-action-check"} />,
  iconOn: <Icon {...TinyIcon.args} name={"filled-action-check"} />,
  size: sizes.small,
};

export const SmallWithSmallIcon : Story<IToggleButtonProps> = Template.bind({});
SmallWithSmallIcon.args = {
  ...PrimaryColor.args,
  iconOff: <Icon {...SmallIcon.args} name={"outlined-action-check"} />,
  iconOn: <Icon {...SmallIcon.args} name={"filled-action-check"} />,
  size: sizes.small,
};

export const MediumWithTinyIcon : Story<IToggleButtonProps> = Template.bind({});
MediumWithTinyIcon.args = {
  ...PrimaryColor.args,
  iconOff: <Icon {...TinyIcon.args} name={"outlined-action-check"} />,
  iconOn: <Icon {...TinyIcon.args} name={"filled-action-check"} />,
  size: sizes.medium,
};

export const MediumWithSmallIcon : Story<IToggleButtonProps> = Template.bind({});
MediumWithSmallIcon.args = {
  ...PrimaryColor.args,
  iconOff: <Icon {...SmallIcon.args} name={"outlined-action-check"} />,
  iconOn: <Icon {...SmallIcon.args} name={"filled-action-check"} />,
  size: sizes.medium,
};

export const Disabled : Story<IToggleButtonProps> = Template.bind({});
Disabled.args = {
  ...Playground.args,
  disabled: true,
};
