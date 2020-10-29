/* eslint-disable no-magic-numbers */
import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { IListProps } from "./List.props";
import { List } from "./List";
import { ListSubheader } from "../ListSubheader";
import { ListItemText } from "../ListItemText";
import { ListItem } from "../ListItem";
import { ListItemIcon } from "../ListItemIcon";
import { ListItemAvatar } from "../ListItemAvatar";
import { ListItemSecondaryAction } from "../ListItemSecondaryAction";
import {
  WithAvatarAndTexts, WithBothPrimaryAndSecondaryTexts,
  WithCheckboxTextAndIconButton, WithIconAndText, WithIconTextAndCheckbox,
  WithIconTextAndSwitch, WithPrimaryTextOnly,
  WithTextAndSecondaryAction,
} from "../ListItem/ListItem.stories";

export default {
  component: List,
  subcomponents: {
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    ListSubheader,
  },
  title: "Components/List",
} as Meta;

type Event = React.MouseEvent<HTMLElement>;

const Template : Story<IListProps> = (args: IListProps) => {

  const initialSelectedIndex = 0;
  const [selectedIndex, setSelectedIndex] = React.useState<number>(initialSelectedIndex);

  const handleClick = (event: Event, index: number) => {
    setSelectedIndex(index);
  };

  const listItems = [
    WithPrimaryTextOnly,
    WithBothPrimaryAndSecondaryTexts,
    WithIconAndText,
    WithTextAndSecondaryAction,
    WithIconTextAndSwitch,
    WithCheckboxTextAndIconButton,
    WithIconTextAndCheckbox,
    WithAvatarAndTexts,
  ];

  return (
    <List {...args}>
      {args.children || listItems.map((item: Story, index: number) => (
        <ListItem
          {...item.args}
          key={index}
          onClick={(event: Event) => handleClick(event, index)}
          selected={selectedIndex === index}
        />
      ))}
    </List>
  );

};

export const Playground : Story<IListProps> = Template.bind({});
Playground.args = {
  className: "",
  dense: false,
  disablePadding: false,
};

export const ForNesting : Story<IListProps> = Template.bind({});
ForNesting.args = {
  ...Playground.args,
  children: <ListItem {...WithIconAndText.args} />,
  disablePadding: true,
};
