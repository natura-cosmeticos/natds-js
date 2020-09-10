import * as React from "react";
import { Story } from "@storybook/react";
import * as AppBarStories from "../AppBar/AppBar.stories";
import * as TypographyStories from "../Typography/Typography.stories";
import { Toolbar } from "./Toolbar";
import { IToolbarProps } from "./Toolbar.props";
import { AppBar } from "../AppBar";
import { argTypes } from "./Toolbar.argTypes";
import { Typography } from "../Typography";
import { Spacing } from "../Spacing";
import * as SpacingMarginStories from "../Spacing/Spacing.margin.stories";
import { IconButton } from "../IconButton";
import { Icon } from "../Icon";
import * as IconStories from "../Icon/Icon.stories";
import { Button } from "../Button";
import * as ButtonStories from "../Button/Button.stories";

export default {
  argTypes,
  component: Toolbar,
  title: "Components/App Bar/Toolbar",
};

const Template : Story<IToolbarProps> = (args) => <AppBar {...AppBarStories.Playground.args}>
  <Toolbar {...args}>
    <Spacing {...SpacingMarginStories.SmallRightMargin.args}>
      <IconButton>
        <Icon name={IconStories.SmallNaturaIcon.args.name} {...IconStories.SmallNaturaIcon.args} />
      </IconButton>
    </Spacing>
    {args.children}
    <Button {...ButtonStories.InheritColor.args}>Login</Button>
  </Toolbar>
</AppBar>;

export const Playground = Template.bind({});
Playground.args = {
  children: <Typography {...TypographyStories.AppBarTitle.args}>AppBar text</Typography>,
};
Playground.storyName = "Playground";

export const Prominent = Template.bind({});
Prominent.args = {
  children: <Typography {...TypographyStories.ProminentAppBarTitle.args}>AppBar text</Typography>,
  variant: "prominent",
};
