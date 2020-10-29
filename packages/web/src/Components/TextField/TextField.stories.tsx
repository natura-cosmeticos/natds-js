import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { action } from "@storybook/addon-actions";
import { TextField } from "./TextField";
import { ITextFieldProps } from "./TextField.props";
import { InputStateHelpTextProvider } from "../InputStateHelpTextProvider";
import { Icon } from "../Icon";
import { Field } from "../Field";
import { argTypes } from "./TextField.argTypes";
import { states } from "./__fixtures__/states";
import { types } from "./__fixtures__/types";
import { TinyIcon } from "../Icon/Icon.stories";

export default {
  argTypes,
  component: TextField,
  subcomponents: {
    Field, InputStateHelpTextProvider,
  },
  title: "Components/Text Field",
} as Meta;

const Template : Story<ITextFieldProps> = (args: ITextFieldProps) => (
  <TextField
    helpText={args.helpText || "Assistive text"}
    id={args.id || "demo-text-field"}
    label={args.label || "Label"}
    placeholder={args.placeholder || "Placeholder"}
    type={args.type}
    {...args}
  />
);

export const Playground : Story<ITextFieldProps> = Template.bind({});
Playground.args = {
  disabled: false,
  helpText: "Helper text",
  icon: null,
  label: "Label",
  multiline: false,
  placeholder: "Placeholder",
  required: false,
  rows: 1,
  state: null,
  type: types.text,
};

export const Standard : Story<ITextFieldProps> = Template.bind({});
Standard.args = {};

export const Search : Story<ITextFieldProps> = Template.bind({});
Search.args = { type: "search" };

export const Password : Story<ITextFieldProps> = Template.bind({});
Password.args = { type: "password" };

/**
 * @todo replace onIconPress call by SnackBar or another alerting strategy
 */
export const WithCustomIcon : Story<ITextFieldProps> = Template.bind({});
WithCustomIcon.args = {
  icon: <Icon {...TinyIcon.args} name={"filled-action-love"} />,
  onIconPress: () => action("icon click"),
};

export const Multiline : Story<ITextFieldProps> = Template.bind({});
Multiline.args = {
  multiline: true,
  rows: 4,
};

export const Filled : Story<ITextFieldProps> = Template.bind({});
Filled.args = { value: "Hello world" };

export const Success : Story<ITextFieldProps> = Template.bind({});
Success.args = { state: states.success };

export const Error : Story<ITextFieldProps> = Template.bind({});
Error.args = { state: states.error };

export const Required : Story<ITextFieldProps> = Template.bind({});
Required.args = { required: true };

export const Disabled : Story<ITextFieldProps> = Template.bind({});
Disabled.args = { disabled: true };

export const ReadOnly : Story<ITextFieldProps> = Template.bind({});
ReadOnly.args = { readOnly: true };

export const ReadOnlyFilled : Story<ITextFieldProps> = Template.bind({});
ReadOnlyFilled.args = {
  readOnly: true,
  value: "Hello world",
};

export const WithoutHelperText : Story<ITextFieldProps> = Template.bind({});
WithoutHelperText.args = { helpText: null };

export const WithMask : Story<ITextFieldProps> = Template.bind({});
WithMask.args = {
  mask: ["(", /[1-9]/, /\d/, ")", " ", /\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/],
  placeholder: "(11) 9999-9999",
};
