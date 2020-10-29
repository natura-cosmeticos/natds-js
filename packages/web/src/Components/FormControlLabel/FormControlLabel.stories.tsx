import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { FormControlLabel, IFormControlLabelProps } from "./FormControlLabel";
import { Radio } from "../Radio";

export default {
  component: FormControlLabel,
  subcomponents: { Radio },
  title: "Utilities/Form Control Label",
} as Meta;

const Template : Story<IFormControlLabelProps> = (args: IFormControlLabelProps) => (
  <FormControlLabel {...args} control={args.control} label={args.label} />
);

export const WithRadio : Story<IFormControlLabelProps> = Template.bind({});
WithRadio.args = {
  control: <Radio />,
  label: "Radio label",
  value: "value",
};
