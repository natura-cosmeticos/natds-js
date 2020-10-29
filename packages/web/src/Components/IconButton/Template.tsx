import { Story } from "@storybook/react";
import * as React from "react";
import { IIconButtonProps } from "./IconButton.props";
import { IconButton } from "./IconButton";
import { Icon } from "../Icon";
import { SmallIcon } from "../Icon/Icon.stories";

export const Template : Story<IIconButtonProps> = (args: IIconButtonProps) => (
  <IconButton {...args}>
    {args.children && args.children}
    {!args.children && <Icon {...SmallIcon.args} name={"filled-default-mockup"} />}
  </IconButton>
);

export default Template;
