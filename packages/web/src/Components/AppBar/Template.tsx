import { Story } from "@storybook/react";
import * as React from "react";
import { IAppBarProps } from "./AppBar.props";
import { IToolbarProps, Toolbar } from "../Toolbar";
import { AppBar } from "./AppBar";
import { Typography } from "../Typography";
import { TabContainer } from "../TabContainer";
import { ForAppBar } from "../TabContainer/TabContainer.stories";
import { TabItem } from "../TabItem";
import {
  WithBrandsProductIconAndLabel,
  WithLoveIconAndLabel,
  WithMakeupIconAndLabel,
  WithOutletIconAndLabel,
} from "../TabItem/TabItem.stories";
import { Spacing } from "../Spacing";
import { SmallRightMargin } from "../Spacing/Spacing.margin.stories";
import { IconButton } from "../IconButton";
import { Icon } from "../Icon";
import { Button } from "../Button";
import { InheritColor } from "../Button/Button.stories";
import { positions } from "./__fixtures__/positions";
import {
  FilterButtonExample,
  MenuButtonExample,
  MyProfileButtonExample,
  SearchButtonExample,
} from "../IconButton/IconButton.stories";
import { AppBarHighlight } from "../AppBarHighlight";
import { ForAppBarTitle } from "../Typography/Typography.stories";
import { SmallIcon } from "../Icon/Icon.stories";

export const Template : Story<IAppBarProps> = (args: IAppBarProps) => (
  <AppBar {...args}>
    <Toolbar>
      <AppBarHighlight>
        <Typography {...ForAppBarTitle.args}>{args.children}</Typography>
      </AppBarHighlight>
    </Toolbar>
  </AppBar>
);

export const TemplateWithTabs : Story<IAppBarProps> = (args: IAppBarProps) => {
  const initialState = 0;
  const [value, setValue] = React.useState<number>(initialState);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AppBar {...args}>
      {/* @ts-ignore */}
      <TabContainer {...ForAppBar.args} onChange={handleChange} value={value}>
        <TabItem {...WithLoveIconAndLabel.args} />
        <TabItem {...WithOutletIconAndLabel.args} />
        <TabItem {...WithBrandsProductIconAndLabel.args} />
        <TabItem {...WithMakeupIconAndLabel.args} />
      </TabContainer>
    </AppBar>
  );
};

export const ToolbarTemplate : Story<IToolbarProps> = (args: IToolbarProps) => (
  <AppBar position={positions.static}>
    <Toolbar {...args}>
      <Spacing {...SmallRightMargin.args}>
        <IconButton>
          <Icon {...SmallIcon.args} name={"filled-brand-naturarosacea"} />
        </IconButton>
      </Spacing>
      {args.children}
      <Button {...InheritColor.args}>Login</Button>
    </Toolbar>
  </AppBar>
);

export const TemplateWithIconButtons : Story<IAppBarProps> = (args: IAppBarProps) => (
  <AppBar {...args}>
    <Toolbar>
      <IconButton {...MenuButtonExample.args} />
      <AppBarHighlight>
        <Typography {...ForAppBarTitle.args}>{args.children}</Typography>
      </AppBarHighlight>
      <IconButton {...SearchButtonExample.args} />
      <IconButton {...FilterButtonExample.args} />
      <IconButton {...MyProfileButtonExample.args} />
    </Toolbar>
  </AppBar>
);
