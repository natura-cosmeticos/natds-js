import { Meta, Story } from "@storybook/react";
import * as React from "react";
import { ITooltipProps, Tooltip } from "./Tooltip";

export default {
  component: Tooltip,
  title: "Components/Tooltip",
} as Meta;

const Template : Story<ITooltipProps> = (args: ITooltipProps) => (
  <Tooltip title={args.title} {...args}>{args.children}</Tooltip>
);

export const Playground : Story<ITooltipProps> = Template.bind({});
