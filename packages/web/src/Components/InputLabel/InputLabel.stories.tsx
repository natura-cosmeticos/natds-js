import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { InputLabel } from "./InputLabel";
import { IInputLabelProps } from "./InputLabel.props";

export default {
  component: InputLabel,
  title: "Utilities/Input Label",
} as Meta;

const Template : Story<IInputLabelProps> = (args: IInputLabelProps) => <InputLabel {...args} />;

export const Playground : Story<IInputLabelProps> = Template.bind({});
Playground.args = {
  children: "Input label",
};
