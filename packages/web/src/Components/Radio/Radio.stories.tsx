import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { Radio, IRadioProps } from "./Radio";
import { colors } from "./__fixtures__/colors";
import { argTypes } from "./Radio.argTypes";

export default {
  argTypes,
  component: Radio,
  title: "Components/Radio (selection control)",
} as Meta;

const Template : Story<IRadioProps> = (args: IRadioProps) => {

  const [checkedState, setChecked] = React.useState<IRadioProps["checked"]>(args.checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, checked: IRadioProps["checked"]) => {
    setChecked(checked);
    args.onChange(event, checked);
  };

  return <Radio {...args} checked={checkedState} onChange={handleChange} />;
};

const TemplateWithCheckedAndUnchecked : Story<IRadioProps> = (args: IRadioProps) => <>
  <Radio {...args} checked={false} />
  <Radio {...args} checked={true} />
</>;

export const Playground : Story<IRadioProps> = Template.bind({});
Playground.args = {
  checked: true,
  color: colors.secondary,
  disabled: false,
};

export const PrimaryColor : Story<IRadioProps> = TemplateWithCheckedAndUnchecked.bind({});
PrimaryColor.args = {
  ...Playground.args,
  color: colors.primary,
};

export const SecondaryColor : Story<IRadioProps> = TemplateWithCheckedAndUnchecked.bind({});
SecondaryColor.args = {
  ...Playground.args,
  color: colors.secondary,
};

export const DefaultColor : Story<IRadioProps> = TemplateWithCheckedAndUnchecked.bind({});
DefaultColor.args = {
  ...Playground.args,
  color: colors.default,
};

export const Enabled : Story<IRadioProps> = TemplateWithCheckedAndUnchecked.bind({});
Enabled.args = {
  color: colors.primary,
  disabled: false,
};

export const Disabled : Story<IRadioProps> = TemplateWithCheckedAndUnchecked.bind({});
Disabled.args = {
  disabled: true,
};
