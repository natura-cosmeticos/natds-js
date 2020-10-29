import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { CardMedia } from "./CardMedia";
import { ICardMediaProps } from "./CardMedia.props";

export default {
  component: CardMedia,
  title: "Components/Card/Card Media",
} as Meta;

const Template : Story<ICardMediaProps> = (args: ICardMediaProps) => (
  <CardMedia {...args} />
);

export const Playground : Story<ICardMediaProps> = Template.bind({});
Playground.args = {
  image: "https://zeroheight.com/uploads/CKp-xkMzUziuVtBy4yXxyg.jpg",
  style: { height: 184 },
  title: "Card Media with image",
};
