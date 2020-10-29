import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { Card } from "./Card";
import { CardActions } from "../CardActions";
import { CardContent } from "../CardContent";
import { CardHeader } from "../CardHeader";
import { CardMedia } from "../CardMedia";
import { ICardProps } from "./Card.props";
import { WithHeading6AndBody2, WithMultipleTypographies } from "../CardContent/CardContent.stories";
import { PlaygroundTemplate, Template } from "./Template";
import { Playground as CardActionsPlayground } from "../CardActions/CardActions.stories";
import { Playground as CardMediaPlayground } from "../CardMedia/CardMedia.stories";

export default {
  component: Card,
  subcomponents: {
    CardActions, CardContent, CardHeader, CardMedia,
  },
  title: "Components/Card",
} as Meta;

export const Playground : Story<ICardProps> = PlaygroundTemplate.bind({});
Playground.args = {
  style: { maxWidth: 328 },
};

export const Simple : Story<ICardProps> = Template.bind({});
Simple.args = {
  children: [
    <CardContent key={"content"} {...WithMultipleTypographies.args} />,
    <CardActions key={"actions"} {...CardActionsPlayground.args} />,
  ],
  style: { maxWidth: 328 },
};

export const WithMedia : Story<ICardProps> = Template.bind({});
WithMedia.args = {
  children: [
    <CardMedia key={"media"} {...CardMediaPlayground.args} />,
    <CardContent key={"content"} {...WithHeading6AndBody2.args} />,
    <CardActions key={"actions"} {...CardActionsPlayground.args} />,
  ],
  style: {
    maxWidth: 328,
  },
};
