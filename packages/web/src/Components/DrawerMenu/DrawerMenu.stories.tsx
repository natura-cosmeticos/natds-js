import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { DrawerMenu } from "./DrawerMenu";
import { IDrawerMenuProps } from "./DrawerMenu.props";

export default {
  component: DrawerMenu,
  title: "Components/Drawer/Drawer Menu",
} as Meta;

const Template : Story<IDrawerMenuProps> = (args: IDrawerMenuProps) => <DrawerMenu {...args} />;

export const Playground : Story<IDrawerMenuProps> = Template.bind({});
Playground.args = {
  list: [
    {
      name: "Place an order",
      icon: "outlined-action-newrequest",
      onSelect: () => { Function.prototype(); },
    },
    {
      name: "Promotions",
      icon: "outlined-action-rating",
      onToggle: () => { Function.prototype(); },
    },
    {
      name: "Unmissable promotions",
      icon: "outlined-action-rating",
      onToggle: () => { Function.prototype(); },
    },
    {
      name: "Sign Out",
      icon: "outlined-navigation-exit",
      onToggle: () => { Function.prototype(); },
    },
  ] as never,
};

export const Navigation : Story<IDrawerMenuProps> = Template.bind({});
Navigation.args = {
  list: [
    {
      name: "Menu Item",
      icon: "outlined-action-love",
      selected: true,
    },
    {
      name: "Menu Item",
      icon: "outlined-action-love",
    },
    {
      name: "Menu Item",
      icon: "outlined-action-love",
      onSelect: null,
      onToggle: null,
      opened: false,
      badge: "Novo",
      list: [
        {
          name: "Sub Item",
        },
        {
          name: "Sub Item",
          badge: "Novo",
        },
      ],
    },
    {
      name: "Menu Item",
      icon: "outlined-action-love",
    },
    {
      section: "Section",
    },
    {
      name: "Menu Item",
      icon: "outlined-action-love",
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ] as any,
};

export const FooterNavigation : Story<IDrawerMenuProps> = Template.bind({});
FooterNavigation.args = {
  list: [
    {
      name: "Help",
      icon: "outlined-action-help",
    },
    {
      name: "Privacy policy",
      icon: "outlined-social-person",
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ] as any,
};
