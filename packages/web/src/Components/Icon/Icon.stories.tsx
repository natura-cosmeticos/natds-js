import * as React from "react";
import { Story } from "@storybook/react";
import { Icon, IIconProps } from "./Icon";
import argTypes from "./Icon.argTypes";

export default {
  argTypes,
  component: Icon,
  title: "Components/Icon",
};

const Template : Story<IIconProps> = (args) => <Icon {...args} />;

export const Playground : Story<IIconProps> = Template.bind({});
Playground.args = {};

export const StandardAddIcon : Story<IIconProps> = Template.bind({});
StandardAddIcon.args = {
  name: "outlined-action-add",
  size: "standard",
};

export const SmallIcon : Story<IIconProps> = Template.bind({});
SmallIcon.args = {
  ...Playground.args,
  size: "small",
};

export const SmallNaturaIcon : Story<IIconProps> = Template.bind({});
SmallNaturaIcon.args = {
  ...SmallIcon.args,
  name: "filled-brand-naturarosacea",
};

export const SmallCloseIcon : Story<IIconProps> = Template.bind({});
SmallCloseIcon.args = {
  ...SmallIcon.args,
  name: "outlined-navigation-close",
};

export const SmallAddIcon : Story<IIconProps> = Template.bind({});
SmallAddIcon.args = {
  ...SmallIcon.args,
  name: "outlined-action-add",
};

export const TinyIcon: Story<IIconProps> = Template.bind({});
TinyIcon.args = {
  ...Playground.args,
  size: "tiny",
};

export const TinyMenuIcon: Story<IIconProps> = Template.bind({});
TinyMenuIcon.args = {
  ...TinyIcon.args,
  name: "filled-navigation-menu",
};

export const OutlinedPersonIcon : Story<IIconProps> = Template.bind({});
OutlinedPersonIcon.args = {
  name: "outlined-social-person",
};

export const OutlinedFavoriteIcon : Story<IIconProps> = Template.bind({});
OutlinedFavoriteIcon.args = {
  name: "outlined-action-favorite",
};

export const OutlinedDeleteIcon : Story<IIconProps> = Template.bind({});
OutlinedDeleteIcon.args = {
  name: "outlined-action-delete",
};

export const OutlinedEmailIcon : Story<IIconProps> = Template.bind({});
OutlinedEmailIcon.args = {
  name: "outlined-communication-email",
};

export const Sizes : Story<IIconProps> = (args) => (
  <React.Fragment>
    <Icon {...args} size={"micro"} />
    <Icon {...args} size={"tiny"} />
    <Icon {...args} size={"small"} />
    <Icon {...args} size={"standard"} />
    <Icon {...args} size={"medium"} />
    <Icon {...args} size={"large"} />
    <Icon {...args} size={"largex"} />
    <Icon {...args} size={"largexx"} />
    <Icon {...args} size={"huge"} />
    <Icon {...args} size={"hugex"} />
    <Icon {...args} size={"hugexx"} />
  </React.Fragment>
);
Sizes.args = Playground.args;
