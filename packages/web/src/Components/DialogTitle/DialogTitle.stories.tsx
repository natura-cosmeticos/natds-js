import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { DialogTitle, IDialogTitleProps } from "./DialogTitle";

export default {
  component: DialogTitle,
  title: "Components/Dialog/Dialog Title",
} as Meta;

const Template : Story<IDialogTitleProps> = (args: IDialogTitleProps) => (
  <DialogTitle {...args} />
);

export const Playground : Story<IDialogTitleProps> = Template.bind({});
Playground.args = {
  children: "Dialog title content",
};
