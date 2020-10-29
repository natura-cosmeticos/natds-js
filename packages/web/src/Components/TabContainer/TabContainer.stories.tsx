import { Story } from "@storybook/react";
import { TabContainer } from "./TabContainer";
import { ITabContainerProps } from "./TabContainer.props";
import { Template } from "./Template";
import { TabItem } from "../TabItem";

export default {
  component: TabContainer,
  subcomponents: { TabItem },
  title: "Components/Tabs/Tab Container",
};

export const Playground : Story<ITabContainerProps> = Template.bind({});
Playground.args = {
  centered: false,
  indicatorColor: "secondary",
  scrollButtons: "auto",
  textColor: "inherit",
  variant: "standard",
};

export const Standard : Story<ITabContainerProps> = Template.bind({});
Standard.args = {
  variant: "standard",
};

/**
 * @todo add width=600
 */
export const Scrollable : Story<ITabContainerProps> = Template.bind({});
Scrollable.args = {
  variant: "scrollable",
};

/**
 * @todo add width=1240
 */
export const FullWidth : Story<ITabContainerProps> = Template.bind({});
FullWidth.args = {
  variant: "fullWidth",
};

export const InheritTextColor : Story<ITabContainerProps> = Template.bind({});
InheritTextColor.args = {
  textColor: "inherit",
};

export const PrimaryTextColor : Story<ITabContainerProps> = Template.bind({});
PrimaryTextColor.args = {
  textColor: "primary",
};

export const SecondaryTextColor : Story<ITabContainerProps> = Template.bind({});
SecondaryTextColor.args = {
  textColor: "secondary",
};

export const SecondaryIndicatorColor : Story<ITabContainerProps> = Template.bind({});
SecondaryIndicatorColor.args = {
  indicatorColor: "secondary",
};

export const PrimaryIndicatorColor : Story<ITabContainerProps> = Template.bind({});
PrimaryIndicatorColor.args = {
  indicatorColor: "primary",
};

/**
 * @todo add width=1240
 */
export const Centered : Story<ITabContainerProps> = Template.bind({});
Centered.args = {
  centered: true,
};

export const ForAppBar : Story<ITabContainerProps> = Template.bind({});
ForAppBar.args = {
  centered: false,
  scrollButtons: "off",
  textColor: "inherit",
  variant: "fullWidth",
};
