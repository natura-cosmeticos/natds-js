import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import * as React from "react";
import { Story } from "@storybook/react";
import { IGridContainerProps } from "./GridContainer.props";
import { ITypographyProps } from "../Typography";
import { GridItem } from "../GridItem";
import { Card } from "../Card";

const GridContainer : React.ForwardRefExoticComponent<IGridContainerProps> = React.lazy(() => import("./GridContainer"));
const Typography : React.ForwardRefExoticComponent<ITypographyProps> = React.lazy(() => import("../Typography"));

GridContainer.displayName = "GridContainer";
Card.displayName = "Card";
Typography.displayName = "Typography";

export const Template : Story<IGridContainerProps> = (args) => {
  const useStyles = makeStyles(createStyles({
    container: {
      backgroundColor: "#FF00FF1A",
    },
    item: {
      backgroundColor: "#FF00FF1A",
      boxSizing: "border-box",
      textAlign: "center",
    },
  }), { name: "GridDemo" });

  const classes = useStyles();

  return <GridContainer className={classes.container} {...args}>
    <GridItem className={classes.item} lg={12} md={12} sm={12} xs={12}>
      <Card elevation={2}>{args.children}</Card>
    </GridItem>
    <GridItem className={classes.item} md={6} sm={6} xs={6}>
      <Card elevation={2}>{args.children}</Card>
    </GridItem>
    <GridItem className={classes.item} md={6} sm={6} xs={6}>
      <Card elevation={2}>{args.children}</Card>
    </GridItem>
  </GridContainer>;

};

export default Template;
