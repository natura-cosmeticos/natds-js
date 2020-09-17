import { Meta, Story } from "@storybook/react";
import { GridContainer as component, IGridContainerProps } from "./GridContainer";
import { GridItem } from "../GridItem";
import argTypes from "./GridContainer.argTypes";
import Template from "./Template";

export default {
  argTypes,
  component,
  subcomponents: { GridItem },
  title: "Utilities/Grid/GridContainer",
} as Meta;

export const Playground : Story<IGridContainerProps> = Template.bind({});
Playground.args = {
  children: "Grid content",
};

export const ZeroSpacing : Story<IGridContainerProps> = Template.bind({});
ZeroSpacing.args = {
  children: "Zero spacing",
  spacing: 0,
};

export const Spacing3 : Story<IGridContainerProps> = Template.bind({});
Spacing3.args = {
  children: "Spacing 3",
  spacing: 3,
};
