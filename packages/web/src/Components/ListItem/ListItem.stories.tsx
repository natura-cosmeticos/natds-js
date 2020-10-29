import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { Args } from "@storybook/addons";
import { action } from "@storybook/addon-actions";
import { IListItemProps, ListItem } from "./ListItem";
import { ListItemText } from "../ListItemText";
import { WithPrimaryText, WithPrimaryAndSecondaryText } from "../ListItemText/ListItemText.stories";
import { Playground as WithAvatar } from "../ListItemAvatar/ListItemAvatar.stories";
import {
  WithMoreIconButton,
  WithSwitch,
  WithTypography,
  WithCheckbox as SecondaryActionWithCheckbox,
} from "../ListItemSecondaryAction/ListItemSecondaryAction.stories";
import { ListItemSecondaryAction } from "../ListItemSecondaryAction";
import { ListItemIcon } from "../ListItemIcon";
import { WithIcon, WithCheckbox as ListItemIconWithCheckbox } from "../ListItemIcon/ListItemIcon.stories";
import { ListItemAvatar } from "../ListItemAvatar";

export default {
  component: ListItem,
  subcomponents: { ListItemIcon, ListItemText, ListItemSecondaryAction },
  title: "Components/List/List Item",
} as Meta;

const Template : Story = (args: Args) => <ListItem {...args} />;

export const Playground : Story<IListItemProps> = Template.bind({});
Playground.args = {
  button: false,
  disabled: false,
  onClick: () => { action("onClick"); },
  selected: false,
};

export const WithPrimaryTextOnly : Story = Template.bind({});
WithPrimaryTextOnly.args = {
  ...Playground.args,
  children: <ListItemText {...WithPrimaryText.args} />,
};

export const WithBothPrimaryAndSecondaryTexts : Story = Template.bind({});
WithBothPrimaryAndSecondaryTexts.args = {
  ...Playground.args,
  children: <ListItemText {...WithPrimaryAndSecondaryText.args} />,
};

export const WithTextAndSecondaryAction : Story = Template.bind({});
WithTextAndSecondaryAction.args = {
  ...Playground.args,
  children: [
    <ListItemText key={"text"} {...WithPrimaryText.args}>Text and secondary action caption</ListItemText>,
    <ListItemSecondaryAction key={"secondary-action"} {...WithTypography.args} />,
  ],
};

export const WithIconAndText : Story = Template.bind({});
WithIconAndText.args = {
  ...Playground.args,
  children: [
    <ListItemIcon key={"icon"} {...WithIcon.args} />,
    <ListItemText key={"text"} {...WithPrimaryText.args}>Icon and text</ListItemText>,
  ],
};

export const WithIconTextAndSwitch : Story = Template.bind({});
WithIconTextAndSwitch.args = {
  ...Playground.args,
  children: [
    <ListItemIcon key={"icon"} {...WithIcon.args} />,
    <ListItemText key={"text"} {...WithPrimaryText.args}>Icon text and Switch</ListItemText>,
    <ListItemSecondaryAction key={"secondary-action"} {...WithSwitch.args} />,
  ],
};

export const WithCheckboxTextAndIconButton : Story = Template.bind({});
WithCheckboxTextAndIconButton.args = {
  ...Playground.args,
  children: [
    <ListItemIcon key={"icon"} {...ListItemIconWithCheckbox.args} />,
    <ListItemText key={"text"} {...WithPrimaryText.args}>Checkbox, text and IconButton</ListItemText>,
    <ListItemSecondaryAction key={"secondaryAction"} {...WithMoreIconButton.args} />,
  ],
};

export const WithIconTextAndCheckbox : Story = Template.bind({});
WithIconTextAndCheckbox.args = {
  ...Playground.args,
  children: [
    <ListItemIcon key={"icon"} {...WithIcon.args} />,
    <ListItemText key={"text"} {...WithPrimaryText.args}>Icon, text and Checkbox</ListItemText>,
    <ListItemSecondaryAction key={"secondary-action"} {...SecondaryActionWithCheckbox.args} />,
  ],
};

export const WithAvatarAndTexts : Story = Template.bind({});
WithAvatarAndTexts.args = {
  ...Playground.args,
  children: [
    <ListItemAvatar key={"avatar"} {...WithAvatar.args}>{WithAvatar.args.children}</ListItemAvatar>,
    <ListItemText key={"text"} {...WithPrimaryText.args}>Avatar, text and secondary action caption</ListItemText>,
    <ListItemSecondaryAction key={"secondary-action"} {...WithTypography.args} />,
  ],
};
