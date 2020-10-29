import { Meta, Story } from "@storybook/react";
import * as React from "react";
import CardActions from "./CardActions";
import { ICardActionsProps } from "./CardActions.props";
import { IconButton } from "../IconButton";
import {
  AddToFavoritesExample,
  ExpandExample,
  ShareExample,
} from "../IconButton/IconButton.stories";
import { Button } from "../Button";
import { ForActions } from "../Button/Button.stories";

export default {
  component: CardActions,
  title: "Components/Card/Card Actions",
} as Meta;

const Template : Story<ICardActionsProps> = (args: ICardActionsProps) => (
  <CardActions {...args} />
);

export const Playground : Story<ICardActionsProps> = Template.bind({});
Playground.args = {
  children: <Button {...ForActions.args} />,
};

export const WithIconButtons : Story<ICardActionsProps> = Template.bind({});
WithIconButtons.args = {
  children: [
    <IconButton key={"add-to-favorites"} {...AddToFavoritesExample.args} />,
    <IconButton key={"share"} {...ShareExample.args} />,
    <IconButton key={"more"} {...ExpandExample.args} />,
  ],
};

export const WithIconButtonsAndDisabledSpacing : Story<ICardActionsProps> = Template.bind({});
WithIconButtonsAndDisabledSpacing.args = {
  ...WithIconButtons.args,
  disableSpacing: true,
};
