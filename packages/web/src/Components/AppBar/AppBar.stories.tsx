import * as React from "react";
import { Meta, Story } from "@storybook/react";
import * as ToolbarStories from "../Toolbar/Toolbar.stories";
import * as TypographyStories from "../Typography/Typography.stories";

import { AppBar as component } from "./AppBar";
import { Toolbar } from "../Toolbar";
import { IAppBarProps } from "./AppBar.props";
import { argTypes } from "./AppBar.argTypes";
import { ITypographyProps } from "../Typography";

const AppBar : React.ForwardRefExoticComponent<IAppBarProps> = React.lazy(() => import("./AppBar"));

AppBar.displayName = "AppBar";

const Typography : React.ForwardRefExoticComponent<ITypographyProps> = React.lazy(() => import("../Typography"));

Typography.displayName = "Typography";

export default {
  argTypes,
  component,
  subcomponents: { Toolbar },
  title: "Components/App Bar",
} as Meta;

const Template : Story<IAppBarProps> = (args) => <AppBar {...args}>
  <Toolbar {...ToolbarStories.ToolbarPlayground.args}>
    <Typography {...TypographyStories.AppBarTitle.args}>{args.children}</Typography>
  </Toolbar>
</AppBar>;

export const Playground : Story<IAppBarProps> = Template.bind({});
Playground.args = {
  children: "App Bar",
  position: "static",
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
      story: `
Sometimes, you may need an AppBar without elevation.
This is very common when you are creating a header for a website, for example.
`,
    },
  },
};
