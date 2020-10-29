import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { Switch } from "./Switch";
import { ISwitchProps } from "./Switch.props";
import { colors } from "./__fixtures__/colors";
import { argTypes } from "./Switch.argTypes";
import edges from "./__fixtures__/edges";

export default {
  argTypes,
  component: Switch,
  parameters: {
    options: {
      panelPosition: "bottom",
    },
  },
  title: "Components/Switch (selection control)",
} as Meta;

const Template : Story<ISwitchProps> = (args: ISwitchProps) => {

  const [checkedState, setChecked] = React.useState<ISwitchProps["checked"]>(args.checked);

  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>, checked: ISwitchProps["checked"]) => {
    setChecked(checked);
    args.onChange(event, checked);
  };

  return <Switch {...args} checked={checkedState} onChange={handleChecked} />;

};

const TemplateWithCheckedAndUnchecked : Story<ISwitchProps> = (args: ISwitchProps) => <>
  <Switch checked={false} {...args} />
  <Switch checked={true} {...args} />
</>;

export const Playground : Story<ISwitchProps> = Template.bind({});
Playground.args = {
  checked: true,
  color: colors.secondary,
  disabled: false,
};

export const PrimaryColor : Story<ISwitchProps> = Template.bind({});
PrimaryColor.args = {
  checked: true,
  color: colors.primary,
};

export const SecondaryColor : Story<ISwitchProps> = Template.bind({});
SecondaryColor.args = {
  checked: true,
  color: colors.secondary,
};

export const DefaultColor : Story<ISwitchProps> = Template.bind({});
DefaultColor.args = {
  checked: true,
  color: colors.default,
};

export const ForListItemSecondaryAction : Story<ISwitchProps> = Template.bind({});
ForListItemSecondaryAction.args = {
  checked: true,
  edge: edges.end,
};

export const Enabled : Story<ISwitchProps> = TemplateWithCheckedAndUnchecked.bind({});
Enabled.args = {
  disabled: false,
};

export const Disabled : Story<ISwitchProps> = TemplateWithCheckedAndUnchecked.bind({});
Disabled.args = {
  disabled: true,
};
