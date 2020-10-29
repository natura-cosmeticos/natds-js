import * as React from "react";
import { Meta, Story } from "@storybook/react";
import TabItem from "./TabItem";
import { ITabItemProps } from "./TabItem.props";
import { Icon } from "../Icon";
import { SmallIcon } from "../Icon/Icon.stories";

export default {
  component: TabItem,
  title: "Components/Tabs/Tab Item",
} as Meta;

const Template : Story<ITabItemProps> = (args: ITabItemProps) => (
  <TabItem {...args} />
);

const a11yProps = (id: ITabItemProps["id"]) => ({
  "aria-controls": id,
  id,
});

export const Playground : Story<ITabItemProps> = Template.bind({});
Playground.args = a11yProps("playground-tab");

export const WithLabel : Story<ITabItemProps> = Template.bind({});
WithLabel.args = {
  ...a11yProps("simple-tab-0"),
  label: "Item One",
};

export const Wrapped : Story<ITabItemProps> = Template.bind({});
Wrapped.args = {
  ...a11yProps("simple-tab-0-wrapped"),
  label: "Item One With Longest Text",
  wrapped: true,
};

export const WithLoveIcon : Story<ITabItemProps> = Template.bind({});
WithLoveIcon.args = {
  ...a11yProps("love-tab"),
  icon: <Icon {...SmallIcon.args} name={"outlined-action-love"} />,
};

export const WithLoveIconAndLabel : Story<ITabItemProps> = Template.bind({});
WithLoveIconAndLabel.args = {
  ...WithLoveIcon.args,
  ...a11yProps("favorites-tab"),
  label: "Favorites",
};

export const WithOutletIcon : Story<ITabItemProps> = Template.bind({});
WithOutletIcon.args = {
  ...a11yProps("outlet-icon-tab"),
  icon: <Icon {...SmallIcon.args} name={"outlined-product-outlet"} />,
};

export const WithOutletIconAndLabel : Story<ITabItemProps> = Template.bind({});
WithOutletIconAndLabel.args = {
  ...WithOutletIcon.args,
  ...a11yProps("outlet-tab"),
  label: "Outlet",
};

export const Disabled : Story<ITabItemProps> = Template.bind({});
Disabled.args = {
  ...WithOutletIconAndLabel.args,
  ...a11yProps("disabled-tab"),
  disabled: true,
};

export const WithBrandsProductIcon : Story<ITabItemProps> = Template.bind({});
WithBrandsProductIcon.args = {
  ...a11yProps("brandsproduct-tab"),
  icon: <Icon {...SmallIcon.args} name={"outlined-product-brandsproduct"} />,
};

export const WithBrandsProductIconAndLabel : Story<ITabItemProps> = Template.bind({});
WithBrandsProductIconAndLabel.args = {
  ...WithBrandsProductIcon.args,
  ...a11yProps("products-tab"),
  label: "Products",
};

export const WithMakeupIcon : Story<ITabItemProps> = Template.bind({});
WithMakeupIcon.args = {
  ...a11yProps("makeup-icon-tab"),
  icon: <Icon {...SmallIcon.args} name={"outlined-product-makeup"} />,
};

export const WithMakeupIconAndLabel : Story<ITabItemProps> = Template.bind({});
WithMakeupIconAndLabel.args = {
  ...WithMakeupIcon.args,
  ...a11yProps("makeup-tab"),
  label: "Makeup",
};
