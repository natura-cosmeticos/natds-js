import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { RadioGroup } from "./RadioGroup";
import { Radio } from "../Radio";
import { IRadioGroupProps } from "./RadioGroup.props";
import { FormControlLabel } from "../FormControlLabel";
import { WithRadio } from "../FormControlLabel/FormControlLabel.stories";

export default {
  component: RadioGroup,
  subcomponents: { FormControlLabel, Radio },
  title: "Components/Radio (selection control)/Radio Group",
} as Meta;

const Template : Story<IRadioGroupProps> = (args: IRadioGroupProps) => (
  <RadioGroup {...args}>
    {args.children}
  </RadioGroup>
);

export const Playground : Story<IRadioGroupProps> = Template.bind({});
Playground.args = {
  children: [
    <FormControlLabel key={"option-1"} {...WithRadio.args} control={WithRadio.args.control} label={"Option 1"} value={"option-1"} />,
    <FormControlLabel key={"option-2"} {...WithRadio.args} control={WithRadio.args.control} label={"Option 2"} value={"option-2"} />,
  ],
};
