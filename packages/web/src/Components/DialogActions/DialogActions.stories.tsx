import { Meta, Story } from "@storybook/react";
import * as React from "react";
import DialogActions, { IDialogActionsProps } from "./DialogActions";
import { Button } from "../Button";
import { ForDialogActions } from "../Button/Button.stories";

export default {
  component: DialogActions,
  title: "Components/Dialog/Dialog Actions",
} as Meta;

const Template : Story<IDialogActionsProps> = (args: IDialogActionsProps) => (
  <DialogActions {...args}>
    {args.children}
  </DialogActions>
);

export const Playground : Story<IDialogActionsProps> = Template.bind({});
Playground.args = {
  children: [
    <Button key={"disagree"} {...ForDialogActions.args}>Disagree</Button>,
    <Button key={"agree"} {...ForDialogActions.args}>Agree</Button>,
  ],
};
