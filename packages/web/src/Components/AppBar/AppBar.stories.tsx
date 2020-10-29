import * as React from "react";
import { Meta, Story } from "@storybook/react";

import { AppBar as component } from "./AppBar";
import { Toolbar } from "../Toolbar";
import { IAppBarProps } from "./AppBar.props";
import { argTypes } from "./AppBar.argTypes";
import { ITypographyProps } from "../Typography";
import {
  Template, TemplateWithIconButtons, TemplateWithTabs, ToolbarTemplate,
} from "./Template";
import { positions } from "./__fixtures__/positions";
import { colors } from "./__fixtures__/colors";
import { AppBarHighlight } from "../AppBarHighlight";
import { ForAppBarTitle } from "../Typography/Typography.stories";

const AppBar : React.ForwardRefExoticComponent<IAppBarProps> = React.lazy(() => import("./AppBar"));
const Typography : React.ForwardRefExoticComponent<ITypographyProps> = React.lazy(() => import("../Typography"));

AppBar.displayName = "AppBar";
Typography.displayName = "Typography";

export default {
  argTypes,
  component,
  subcomponents: { AppBarHighlight, Toolbar },
  title: "Components/App Bar",
} as Meta;

export const Playground : Story<IAppBarProps> = Template.bind({});
Playground.args = {
  children: "App Bar text",
  position: positions.static,
};
Playground.storyName = "Playground";

export const PrimaryColor : Story<IAppBarProps> = Template.bind({});
PrimaryColor.args = {
  ...Playground.args,
  children: "Primary color",
  color: "primary",
};
PrimaryColor.storyName = "Primary color";

export const SecondaryColor : Story<IAppBarProps> = Template.bind({});
SecondaryColor.args = {
  ...Playground.args,
  children: "Secondary color",
  color: "secondary",
};
SecondaryColor.storyName = "Secondary color";

export const DefaultColor : Story<IAppBarProps> = Template.bind({});
DefaultColor.args = {
  ...Playground.args,
  children: "Default color",
  color: "default",
};
DefaultColor.storyName = "Default color";

export const InheritColor : Story<IAppBarProps> = Template.bind({});
InheritColor.args = {
  ...Playground.args,
  children: "Inherit color",
  color: "inherit",
};
InheritColor.storyName = "Inherit color";

export const DefaultElevation : Story<IAppBarProps> = Template.bind({});
DefaultElevation.args = {
  ...Playground.args,
  children: "Default elevation",
  color: "primary",
};

export const NoElevation : Story<IAppBarProps> = Template.bind({});
NoElevation.args = {
  ...Playground.args,
  children: "No elevation",
  elevation: 0,
};
NoElevation.parameters = {
  docs: {
    description: {
      story: `Sometimes, you may need an AppBar without elevation.
This is very common when you are creating a header for a website, for example.`,
    },
  },
};

export const WithTabs : Story<IAppBarProps> = TemplateWithTabs.bind({});
WithTabs.args = {
  color: colors.default,
  position: positions.static,
};

export const WithProminentToolbar = ToolbarTemplate.bind({});
WithProminentToolbar.args = {
  children: <AppBarHighlight><Typography {...ForAppBarTitle.args}>AppBar text</Typography></AppBarHighlight>,
  variant: "prominent",
};
WithProminentToolbar.parameters = {
  docs: {
    description: {
      story: "When `Toolbar` is used with the `prominent` variant, `AppBarHighlight` component will be automatically positioned.",
    },
  },
};

export const WithIconButtons = TemplateWithIconButtons.bind({});
WithIconButtons.args = {
  children: "AppBar",
  position: positions.relative,
};
