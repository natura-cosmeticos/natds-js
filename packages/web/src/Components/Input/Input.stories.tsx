import { Meta, Story } from "@storybook/react";
import * as React from "react";
import Input, { IInputProps } from "./Input";

export default {
  component: Input,
  title: "Utilities/Input",
} as Meta;

const Template : Story<IInputProps> = (args: IInputProps) => <Input {...args} />;

export const Playground : Story<IInputProps> = Template.bind({});
