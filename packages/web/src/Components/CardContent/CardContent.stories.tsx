import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { CardContent } from "./CardContent";
import { ICardContentProps } from "./CardContent.props";
import {
  Body2, CaptionWithSecondaryParagraph, Heading6, Overline,
} from "../Typography/Typography.stories";
import { Typography } from "../Typography";

export default {
  component: CardContent,
  subcomponents: { Typography },
  title: "Components/Card/Card Content",
} as Meta;

const Template : Story<ICardContentProps> = (args: ICardContentProps) => (
  <CardContent {...args} />
);

export const Playground : Story<ICardContentProps> = Template.bind({});
Playground.args = {
  children: "Card content text",
};

export const WithBody2Typography : Story<ICardContentProps> = Template.bind({});
WithBody2Typography.args = {
  children: <Typography {...Body2.args}>Card content with body2 typography variant</Typography>,
};

export const WithParagraphTypography : Story<ICardContentProps> = Template.bind({});
WithParagraphTypography.args = {
  children: <Typography {...Body2.args} paragraph={true}>Card content with body2 paragraph typography</Typography>,
};

export const WithHeading6AndBody2 : Story<ICardContentProps> = Template.bind({});
WithHeading6AndBody2.args = {
  children: [
    <Typography key={"h6"} {...Heading6.args} />,
    <Typography key={"body2"} {...Body2.args} />,
  ],
};

export const WithMultipleTypographies : Story<ICardContentProps> = Template.bind({});
WithMultipleTypographies.args = {
  children: [
    <Typography key={"overline"} {...Overline.args} />,
    <Typography key={"h6"} {...Heading6.args} />,
    <Typography key={"paragraph"} {...CaptionWithSecondaryParagraph.args} />,
    <Typography key={"body2"} {...Body2.args} />,
  ],
};
