import { Story } from "@storybook/react";
import * as React from "react";
import { IButtonProps } from "./Button.props";
import { Button } from "./Button";

export const Template : Story<IButtonProps> = (args) => <Button {...args} />;

export const TemplateWithColors : Story<IButtonProps> = (args) => <>
  <Button {...args} color={"primary"}>Primary color</Button>&nbsp;
  <Button {...args} color={"secondary"}>Secondary color</Button>&nbsp;
  <Button {...args} color={"default"}>Default color</Button>&nbsp;
</>;

export const TemplateWithSizes : Story<IButtonProps> = (args) => <>
  <Button {...args} size={"small"}>Small size</Button>&nbsp;
  <Button {...args} size={"medium"}>Medium size</Button>&nbsp;
  <Button {...args} size={"large"}>Large size</Button>&nbsp;
</>;

export default Template;
