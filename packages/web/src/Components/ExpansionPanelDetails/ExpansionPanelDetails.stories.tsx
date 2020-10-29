import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { ExpansionPanelDetails, IExpansionPanelDetailsProps } from "./ExpansionPanelDetails";
import { Typography } from "../Typography";
import {
  Subtitle1,
  Subtitle1WithTextPrimaryColor,
  Subtitle1WithTextSecondaryColor,
} from "../Typography/Typography.stories";

export default {
  component: ExpansionPanelDetails,
  title: "Components/Expansion Panel/Expansion Panel Details",
} as Meta;

const Template : Story<IExpansionPanelDetailsProps> = (args: IExpansionPanelDetailsProps) => (
  <ExpansionPanelDetails {...args} />
);

export const Playground : Story<IExpansionPanelDetailsProps> = Template.bind({});
Playground.args = {
  children: "Expansion panel details content",
};

export const WithSubtitle1 : Story<IExpansionPanelDetailsProps> = Template.bind({});
WithSubtitle1.args = {
  children: <Typography {...Subtitle1.args}>Expansion panel details with subtitle 1 typography</Typography>,
};

export const WithSubtitle1AndTextPrimaryColor : Story<IExpansionPanelDetailsProps> = Template.bind({});
WithSubtitle1AndTextPrimaryColor.args = {
  children: <Typography {...Subtitle1WithTextPrimaryColor.args}>
    This is a longer content text for expansion panel details with primary text color.
  </Typography>,
};

export const WithSubtitle1AndTextSecondaryColor : Story<IExpansionPanelDetailsProps> = Template.bind({});
WithSubtitle1AndTextSecondaryColor.args = {
  children: <Typography {...Subtitle1WithTextSecondaryColor.args}>
    This is a longer content text for expansion panel details with secondary text color.
  </Typography>,
};
