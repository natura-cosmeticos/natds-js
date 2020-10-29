import { Meta, Story } from "@storybook/react";
import * as React from "react";
import DialogContent, { IDialogContentProps } from "./DialogContent";
import { DialogContentText } from "../DialogContentText";
import { Playground as DialogContentTextPlayground } from "../DialogContentText/DialogContentText.stories";
import { RadioGroup } from "../RadioGroup";
import { Playground as RadioGroupPlayground } from "../RadioGroup/RadioGroup.stories";

export default {
  component: DialogContent,
  subcomponents: { DialogContentText },
  title: "Components/Dialog/Dialog Content",
} as Meta;

const Template : Story<IDialogContentProps> = (args: IDialogContentProps) => (
  <DialogContent {...args}>
    {args.children}
  </DialogContent>
);

export const Playground : Story<IDialogContentProps> = Template.bind({});
Playground.args = {
  children: <DialogContentText {...DialogContentTextPlayground.args}>
    {DialogContentTextPlayground.args.children}
  </DialogContentText>,
  dividers: false,
};

export const WithRadioGroup : Story<IDialogContentProps> = Template.bind({});
WithRadioGroup.args = {
  ...Playground.args,
  children: <RadioGroup {...RadioGroupPlayground.args} />,
};
