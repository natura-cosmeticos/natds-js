import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { Field } from "./Field";
import { ITextFieldProps } from "../TextField";

export default {
  component: Field,
  title: "Utilities/Field",
} as Meta;

const Template : Story<ITextFieldProps> = (args: ITextFieldProps) => (
  <Field id={args.id} {...args} />
);

export const Playground : Story<ITextFieldProps> = Template.bind({});
