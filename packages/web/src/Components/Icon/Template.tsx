import * as React from "react";
import { Story } from "@storybook/react";
import { Icon, IIconProps } from "./Icon";

export const Template : Story<IIconProps> = (args) => <Icon {...args} />;

export const TemplateWithMultipleSizes : Story<IIconProps> = (args: IIconProps) => (
  <div>
    <Icon {...args} size={"micro"} />
    <Icon {...args} size={"tiny"} />
    <Icon {...args} size={"small"} />
    <Icon {...args} size={"standard"} />
    <Icon {...args} size={"medium"} />
    <Icon {...args} size={"large"} />
    <Icon {...args} size={"largeX"} />
    <Icon {...args} size={"largeXX"} />
    <Icon {...args} size={"huge"} />
    <Icon {...args} size={"hugeX"} />
    <Icon {...args} size={"hugeXX"} />
  </div>
);
