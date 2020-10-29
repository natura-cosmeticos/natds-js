import * as React from "react";
import { Meta, Story } from "@storybook/react";
import ListItemIcon, { IListItemIconProps } from "./ListItemIcon";
import { Icon } from "../Icon";
import { SmallIcon } from "../Icon/Icon.stories";
import { Checkbox } from "../Checkbox";
import { Playground as CheckboxPlayground } from "../Checkbox/Checkbox.stories";

export default {
  component: ListItemIcon,
  subcomponents: { Checkbox, Icon },
  title: "Components/List/List Item Icon",
} as Meta;

const Template : Story<IListItemIconProps> = (args: IListItemIconProps) => (
  <ListItemIcon {...args} />
);

export const Playground : Story<IListItemIconProps> = Template.bind({});

export const WithIcon : Story<IListItemIconProps> = Template.bind({});
WithIcon.args = {
  children: <Icon {...SmallIcon.args} name={"outlined-action-love"} />,
};

export const WithCheckbox : Story<IListItemIconProps> = Template.bind({});
WithCheckbox.args = {
  children: <Checkbox {...CheckboxPlayground.args} />,
};
