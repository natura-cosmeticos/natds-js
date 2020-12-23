import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Counter, ICounterProps } from "./Counter";
import argTypes from "./Container.argTypes";

export default {
  argTypes,
  component: Counter,
  title: "Components/Counter",
} as Meta;

const Template : Story<ICounterProps> = (args: ICounterProps) => (
  <div>
    <Counter {...args}></Counter>
  </div>
);

export const Playground : Story<ICounterProps> = Template.bind({});
Playground.args = {
  onChange: () => null,
  onDecrement: () => null,
  onIncrement: () => null,
};

export const SmallSize : Story<ICounterProps> = Template.bind({});
SmallSize.args = {
  ...Playground.args,
  size: "small",
};

export const MediumSize : Story<ICounterProps> = Template.bind({});
MediumSize.args = {
  ...Playground.args,
  size: "medium",
};

export const WithLabel : Story<ICounterProps> = Template.bind({});
WithLabel.args = {
  ...Playground.args,
  size: "small",
  label: "Quantidade",
};
