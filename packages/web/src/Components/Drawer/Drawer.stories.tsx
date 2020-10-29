import * as React from "react";
import { Meta, Story } from "@storybook/react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Drawer, IDrawerProps } from "./Drawer";
import { DrawerBody } from "../DrawerBody";
import { DrawerFooter } from "../DrawerFooter";
import { DrawerHeader } from "../DrawerHeader";
import { DrawerMenu } from "../DrawerMenu";
import { anchors } from "./__fixtures__/anchors";
import { variants } from "./__fixtures__/variants";
import { Playground as DrawerHeaderPlayground } from "../DrawerHeader/DrawerHeader.stories";
import { Playground as DrawerBodyPlayground } from "../DrawerBody/DrawerBody.stories";
import { Playground as DrawerFooterPlayground } from "../DrawerFooter/DrawerFooter.stories";
import { DrawerMenuItem } from "../DrawerMenu/DrawerMenuItem";

export default {
  component: Drawer,
  subcomponents: {
    DrawerBody, DrawerFooter, DrawerHeader, DrawerMenu, DrawerMenuItem,
  },
  title: "Components/Drawer",
} as Meta;

const Template : Story<IDrawerProps> = (args: IDrawerProps) => {
  const useStyles = makeStyles(createStyles({
    drawer: {
      display: "flex",
      flexFlow: "column nowrap",
      height: "100%",
      justifyContent: "space-between",
      overflow: "hidden",
      width: "256px",
    },
  }), { name: "DrawerDemo" });
  const classes = useStyles();

  return <Drawer classes={{ paper: classes.drawer }} {...args} />;
};

export const Playground : Story<IDrawerProps> = Template.bind({});
Playground.args = {
  anchor: anchors.left,
  children: <>
    <DrawerHeader key={"drawerHeader"} {...DrawerHeaderPlayground.args} />
    <DrawerBody key={"drawerBody"} {...DrawerBodyPlayground.args} />
    <DrawerFooter key={"drawerFooter"} {...DrawerFooterPlayground.args} />
  </>,
  open: true,
  variant: variants.temporary,
};
