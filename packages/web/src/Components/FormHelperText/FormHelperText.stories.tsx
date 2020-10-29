import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { FormHelperText } from "./FormHelperText";
import { IFormHelperTextProps } from "./FormHelperText.props";

export default {
  component: FormHelperText,
  title: "Utilities/Form Helper Text",
} as Meta;

const Template : Story<IFormHelperTextProps> = (args: IFormHelperTextProps) => (
  <FormHelperText {...args} />
);

export const Playground : Story<IFormHelperTextProps> = Template.bind({});
Playground.args = {
  children: "Form helper text",
};
