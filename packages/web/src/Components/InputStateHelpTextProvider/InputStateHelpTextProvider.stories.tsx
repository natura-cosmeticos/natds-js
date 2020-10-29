import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { InputStateHelpTextProvider, IInputStateHelpTextProviderProps } from "./InputStateHelpTextProvider";
import { FormHelperText } from "../FormHelperText";
import { InputLabel } from "../InputLabel";

export default {
  component: InputStateHelpTextProvider,
  subcomponents: { FormHelperText, InputLabel },
  title: "Utilities/Input State Help Text Provider",
} as Meta;

const Template : Story<IInputStateHelpTextProviderProps> = (args: IInputStateHelpTextProviderProps) => (
  <InputStateHelpTextProvider state={args.state} {...args} />
);

export const Playground : Story<IInputStateHelpTextProviderProps> = Template.bind({});
