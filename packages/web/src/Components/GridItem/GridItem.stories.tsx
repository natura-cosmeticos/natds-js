import * as React from "react";
import { Meta, Story } from "@storybook/react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { GridItem as component, IGridItemProps } from "./GridItem";
import { IGridContainerProps } from "../GridContainer";
import { ITypographyProps } from "../Typography";
import * as GridContainerStories from "../GridContainer/GridContainer.stories";
import * as TypographyStories from "../Typography/Typography.stories";
import { argTypes } from "./GridItem.argTypes";

const GridContainer : React.ForwardRefExoticComponent<IGridContainerProps> = React.lazy(() => import("../GridContainer"));
const GridItem : React.ForwardRefExoticComponent<IGridItemProps> = React.lazy(() => import("./GridItem"));
const Typography : React.ForwardRefExoticComponent<ITypographyProps> = React.lazy(() => import("../Typography"));

GridContainer.displayName = "GridContainer";
GridItem.displayName = "GridItem";
Typography.displayName = "Typography";

export default {
  argTypes,
  component,
  title: "Utilities/Grid/GridItem",
} as Meta;

const Template : Story<IGridItemProps> = (args) => {
  const useStyles = makeStyles(createStyles({
    root: {
      backgroundColor: "#FF00FF1A",
    },
  }), { name: "GridDemo" });
  const classes = useStyles();

  return <GridContainer {...GridContainerStories.Spacing3.args} classes={classes}>
    <GridItem classes={classes} {...args}>
      {args.children}
      <Typography {...TypographyStories.Caption.args}>
        Use the viewport tool to check how this grid will behave visually at different widths.
      </Typography>
    </GridItem>
  </GridContainer>;
};

export const Playground : Story<IGridItemProps> = Template.bind({});
Playground.args = {
  children: <Typography {...TypographyStories.Body1.args}>Grid item content</Typography>,
  md: 12,
  sm: 12,
  xs: 12,
};

export const Md12 : Story<IGridItemProps> = Template.bind({});
Md12.args = {
  children: <Typography {...TypographyStories.Body1.args}>md 12</Typography>,
  md: 12,
};

export const Md6 : Story<IGridItemProps> = Template.bind({});
Md6.args = {
  children: <Typography {...TypographyStories.Body1.args}>md 6</Typography>,
  md: 12,
};

export const Sm12 : Story<IGridItemProps> = Template.bind({});
Sm12.args = {
  children: <Typography {...TypographyStories.Body1.args}>sm 12</Typography>,
  sm: 12,
};

export const Xs12 : Story<IGridItemProps> = Template.bind({});
Xs12.args = {
  children: <Typography {...TypographyStories.Body1.args}>xs 12</Typography>,
};
