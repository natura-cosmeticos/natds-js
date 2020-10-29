import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { ExpansionPanelActions, IExpansionPanelActionsProps } from "./ExpansionPanelActions";
import { Button } from "../Button";
import { ForActions } from "../Button/Button.stories";

export default {
  component: ExpansionPanelActions,
  subcomponents: { Button },
  title: "Components/Expansion Panel/Expansion Panel Actions",
} as Meta;

const Template : Story<IExpansionPanelActionsProps> = (args: IExpansionPanelActionsProps) => (
  <ExpansionPanelActions {...args} />
);

export const Playground : Story<IExpansionPanelActionsProps> = Template.bind({});
Playground.args = {
  children: [
    <Button key={"cancel"} {...ForActions.args}>Cancel</Button>,
    <Button key={"save"} {...ForActions.args}>Save</Button>,
  ],
};

export const WithSpacingDisabled : Story<IExpansionPanelActionsProps> = Template.bind({});
WithSpacingDisabled.args = {
  ...Playground.args,
  disableSpacing: true,
};
