import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { DialogContentText } from "./DialogContentText";
import { IDialogContentTextProps } from "./DialogContentText.props";

export default {
  component: DialogContentText,
  title: "Components/Dialog/Dialog Content Text",
} as Meta;

const Template : Story<IDialogContentTextProps> = (args: IDialogContentTextProps) => (
  <DialogContentText {...args}>{args.children}</DialogContentText>
);

export const Playground : Story<IDialogContentTextProps> = Template.bind({});
Playground.args = {
  children: "Dialog content text",
};
