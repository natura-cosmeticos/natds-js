import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { ListItemText, IListItemTextProps } from "./ListItemText";

export default {
  component: ListItemText,
  title: "Components/List/List Item Text",
} as Meta;

const Template : Story<IListItemTextProps> = (args: IListItemTextProps) => <ListItemText {...args} />;

export const Playground : Story<IListItemTextProps> = Template.bind({});
Playground.args = {
  primary: "Primary content",
  secondary: "Secondary content",
};

export const WithPrimaryText : Story<IListItemTextProps> = Template.bind({});
WithPrimaryText.args = {
  primary: "List item text",
};

export const WithPrimaryAndSecondaryText : Story<IListItemTextProps> = Template.bind({});
WithPrimaryAndSecondaryText.args = {
  primary: "Primary content",
  secondary: "Secondary content",
};
