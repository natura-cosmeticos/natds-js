import { Meta, Story } from "@storybook/react";
import * as React from "react";
import Collapse, { ICollapseProps } from "./Collapse";
import { List } from "../List";
import { ForNesting } from "../List/List.stories";
import { CardContent } from "../CardContent";
import { WithParagraphTypography } from "../CardContent/CardContent.stories";

export default {
  component: Collapse,
  title: "Utilities/Collapse",
} as Meta;

const Template : Story<ICollapseProps> = (args: ICollapseProps) => <Collapse {...args} />;

export const Playground : Story<ICollapseProps> = Template.bind({});
Playground.args = {
  children: "Collapse content example",
};

export const WithList : Story<ICollapseProps> = Template.bind({});
WithList.args = {
  children: <List {...ForNesting.args} />,
  in: true,
  timeout: "auto",
  unmountOnExit: true,
};

export const ForCardContent : Story<ICollapseProps> = Template.bind({});
ForCardContent.args = {
  children: <CardContent {...WithParagraphTypography.args} />,
  timeout: "auto",
  unmountOnExit: true,
};
