import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { BottomNavigationAction, IBottomNavigationActionProps } from "./BottomNavigationAction";
import { Icon } from "../Icon";
import { TinyIcon } from "../Icon/Icon.stories";
import { argTypes } from "./BottomNavigationAction.argTypes";

export default {
  argTypes,
  component: BottomNavigationAction,
  subcomponents: { Icon },
  title: "Components/Bottom Navigation/Bottom Navigation Action",
} as Meta;

const Template : Story<IBottomNavigationActionProps> = (args: IBottomNavigationActionProps) => (
  <BottomNavigationAction {...args} />
);

export const Playground : Story<IBottomNavigationActionProps> = Template.bind({});
Playground.args = {
  icon: <Icon {...TinyIcon.args} name={"filled-default-mockup"} />,
  label: "Label text",
  showLabel: true,
  value: "value",
};

export const WithCancelIcon : Story<IBottomNavigationActionProps> = Template.bind({});
WithCancelIcon.args = {
  icon: <Icon {...TinyIcon.args} name={"filled-action-cancel"} />,
  label: "Canceled orders",
  value: "canceled-orders",
};

export const WithCancelIconAndLabel : Story<IBottomNavigationActionProps> = Template.bind({});
WithCancelIconAndLabel.args = {
  ...WithCancelIcon.args,
  showLabel: true,
};

export const WithCheckIcon : Story<IBottomNavigationActionProps> = Template.bind({});
WithCheckIcon.args = {
  icon: <Icon {...TinyIcon.args} name={"filled-action-check"} />,
  label: "Confirmed orders",
  value: "confirmed-orders",
};

export const WithCheckIconAndLabel : Story<IBottomNavigationActionProps> = Template.bind({});
WithCheckIconAndLabel.args = {
  ...WithCheckIcon.args,
  showLabel: true,
};

export const WithPlayIcon : Story<IBottomNavigationActionProps> = Template.bind({});
WithPlayIcon.args = {
  icon: <Icon {...TinyIcon.args} name={"filled-media-play"} />,
  label: "Training videos",
  value: "training-videos",
};

export const WithPlayIconAndLabel : Story<IBottomNavigationActionProps> = Template.bind({});
WithPlayIconAndLabel.args = {
  ...WithPlayIcon.args,
  showLabel: true,
};

export const WithHomeIcon : Story<IBottomNavigationActionProps> = Template.bind({});
WithHomeIcon.args = {
  icon: <Icon {...TinyIcon.args} name={"outlined-navigation-home"} />,
  label: "Home",
  value: "home",
};

export const WithHomeIconAndLabel : Story<IBottomNavigationActionProps> = Template.bind({});
WithHomeIconAndLabel.args = {
  ...WithHomeIcon.args,
  showLabel: true,
};
