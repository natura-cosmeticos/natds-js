import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { IFabProps } from "./Fab.props";
import { Fab as component } from "./Fab";
import { variants } from "./__fixtures__/variants";
import { colors } from "./__fixtures__/colors";
import { sizes } from "./__fixtures__/sizes";
import * as IconStories from "../Icon/Icon.stories";
import { Icon } from "../Icon";
import { argTypes } from "./Fab.argTypes";

const Fab : React.ForwardRefExoticComponent<IFabProps> = React.lazy(() => import("./Fab"));

Fab.displayName = "Fab";

export default {
  argTypes,
  component,
  subcomponents: { Icon },
  title: "Components/FAB",
} as Meta;

const Template : Story<IFabProps> = (args) => <Fab {...args} />;

export const Playground : Story<IFabProps> = Template.bind({});
Playground.args = {

  /**
   * @todo add support for choosing icon
   */
  children: <Icon name={"outlined-action-add"} {...IconStories.StandardAddIcon.args} />,
  color: colors.primary,
  size: sizes.large,
  variant: variants.round,
};

export const PrimaryColor : Story<IFabProps> = Template.bind({});
PrimaryColor.args = {
  ...Playground.args,
  color: colors.primary,
};

export const SecondaryColor : Story<IFabProps> = Template.bind({});
SecondaryColor.args = {
  ...Playground.args,
  color: colors.secondary,
};
SecondaryColor.parameters = {
  docs: {
    description: {
      story: "We recommend that you give preference to the secondary color when using the FAB component.",
    },
  },
};

export const LightColor : Story<IFabProps> = Template.bind({});
LightColor.args = {
  ...Playground.args,
  color: colors.light,
};

export const RoundVariant : Story<IFabProps> = Template.bind({});
RoundVariant.args = {
  ...Playground.args,
  variant: variants.round,
};

export const ExtendedVariant : Story<IFabProps> = Template.bind({});
ExtendedVariant.args = {
  ...Playground.args,
  children: "Extended (with text)",
  variant: "extended",
};

export const LargeSize : Story<IFabProps> = Template.bind({});
LargeSize.args = {
  ...Playground.args,
  size: sizes.large,
};

export const MediumSize : Story<IFabProps> = Template.bind({});
MediumSize.args = {
  ...Playground.args,
  size: sizes.medium,
};

export const SmallSize : Story<IFabProps> = Template.bind({});
SmallSize.args = {
  ...Playground.args,
  size: sizes.small,
};

export const LeadingIcon : Story<IFabProps> = Template.bind({});
LeadingIcon.args = {
  ...Playground.args,
  children: <><Icon name={"outlined-action-add"} {...IconStories.SmallAddIcon.args} /> Icon and text</>,
  variant: variants.extended,
};
