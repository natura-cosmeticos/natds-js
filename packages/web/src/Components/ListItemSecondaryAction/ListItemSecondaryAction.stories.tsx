import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { ListItemSecondaryAction } from "./ListItemSecondaryAction";
import { IListItemSecondaryActionProps } from "./ListItemSecondaryAction.props";
import { Typography } from "../Typography";
import { CaptionWithSecondaryText as TypographyForThis } from "../Typography/Typography.stories";
import { ForListItemSecondaryAction as SwitchForThis } from "../Switch/Switch.stories";
import { ForListItemSecondaryAction as CheckboxForThis } from "../Checkbox/Checkbox.stories";
import { Switch } from "../Switch";
import { IconButton } from "../IconButton";
import { NavigationMoreButtonExample } from "../IconButton/IconButton.stories";
import { Checkbox } from "../Checkbox";

export default {
  component: ListItemSecondaryAction,
  subcomponents: {
    Checkbox, IconButton, Switch, Typography,
  },
  title: "Components/List/List Item Secondary Action",
} as Meta;

const Template : Story<IListItemSecondaryActionProps> = (args: IListItemSecondaryActionProps) => (
  <ListItemSecondaryAction {...args} />
);

export const Playground : Story<IListItemSecondaryActionProps> = Template.bind({});

export const WithTypography : Story<IListItemSecondaryActionProps> = Template.bind({});
WithTypography.args = {
  children: <Typography {...TypographyForThis.args}>Secondary action caption</Typography>,
};

export const WithSwitch : Story<IListItemSecondaryActionProps> = Template.bind({});
WithSwitch.args = {
  children: <Switch {...SwitchForThis.args} />,
};

export const WithMoreIconButton : Story<IListItemSecondaryActionProps> = Template.bind({});
WithMoreIconButton.args = {
  children: <IconButton {...NavigationMoreButtonExample.args} />,
};

export const WithCheckbox : Story<IListItemSecondaryActionProps> = Template.bind({});
WithCheckbox.args = {
  children: <Checkbox {...CheckboxForThis.args} />,
};
