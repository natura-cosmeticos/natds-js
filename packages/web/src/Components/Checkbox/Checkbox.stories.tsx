import * as React from "react";
import { Meta, Story } from "@storybook/react";
import Checkbox, { ICheckboxProps } from "./Checkbox";
import { colors } from "./__fixtures__/colors";
import argTypes from "./Checkbox.argTypes";
import edges from "./__fixtures__/edges";

export default {
  argTypes,
  component: Checkbox,
  title: "Components/Checkbox (selection control)",
} as Meta;

const Template : Story<ICheckboxProps> = (args: ICheckboxProps) => {

  const [checkedState, setChecked] = React.useState<ICheckboxProps["checked"]>(args.checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, checked: ICheckboxProps["checked"]) => {
    setChecked(checked);
    args.onChange(event, checked);
  };

  return <Checkbox {...args} checked={checkedState} onChange={handleChange} />;
};

const TemplateWithCheckedAndUnchecked : Story<ICheckboxProps> = (args: ICheckboxProps) => <>
  <Checkbox {...args} checked={false} />
  <Checkbox {...args} checked={true} />
</>;

export const Playground : Story<ICheckboxProps> = Template.bind({});
Playground.args = {
  checked: true,
  color: colors.secondary,
  disabled: false,
  indeterminate: false,
};

export const PrimaryColor : Story<ICheckboxProps> = TemplateWithCheckedAndUnchecked.bind({});
PrimaryColor.args = {
  color: colors.primary,
};

export const SecondaryColor : Story<ICheckboxProps> = TemplateWithCheckedAndUnchecked.bind({});
SecondaryColor.args = {
  color: colors.secondary,
};

export const DefaultColor : Story<ICheckboxProps> = TemplateWithCheckedAndUnchecked.bind({});
DefaultColor.args = {
  color: colors.default,
};

export const Enabled : Story<ICheckboxProps> = TemplateWithCheckedAndUnchecked.bind({});
Enabled.args = {
  disabled: false,
};

export const Disabled : Story<ICheckboxProps> = TemplateWithCheckedAndUnchecked.bind({});
Disabled.args = {
  disabled: true,
};

export const Indeterminate : Story<ICheckboxProps> = TemplateWithCheckedAndUnchecked.bind({});
Indeterminate.args = {
  indeterminate: true,
};

export const ForTableHeader : Story<ICheckboxProps> = Template.bind({});
ForTableHeader.args = {
  color: colors.primary,
  inputProps: {
    "aria-label": "Select all items",
  },
};

export const ForTableCell : Story<ICheckboxProps> = Template.bind({});
ForTableCell.args = {
  color: colors.primary,
  inputProps: {
    "aria-label": "Select item",
  },
};

export const ForListItemSecondaryAction : Story<ICheckboxProps> = Template.bind({});
ForListItemSecondaryAction.args = {
  checked: true,
  edge: edges.end,
};
