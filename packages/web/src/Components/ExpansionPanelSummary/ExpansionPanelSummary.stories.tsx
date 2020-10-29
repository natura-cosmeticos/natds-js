import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { ExpansionPanelSummary, IExpansionPanelSummaryProps } from "./ExpansionPanelSummary";
import { Typography } from "../Typography";
import { Subtitle1, Subtitle1WithTextSecondaryColor } from "../Typography/Typography.stories";
import { Icon } from "../Icon";
import { SmallIcon } from "../Icon/Icon.stories";

export default {
  component: ExpansionPanelSummary,
  subcomponents: { Icon, Typography },
  title: "Components/Expansion Panel/Expansion Panel Summary",
} as Meta;

const Template : Story<IExpansionPanelSummaryProps> = (args: IExpansionPanelSummaryProps) => (
  <ExpansionPanelSummary {...args} />
);

export const Playground : Story<IExpansionPanelSummaryProps> = Template.bind({});
Playground.args = {
  children: <Typography {...Subtitle1.args}>Expansion panel summary with subtitle 1 typography</Typography>,
  expandIcon: <Icon {...SmallIcon.args} name={"outlined-navigation-arrowbottom"} />,
};

export const WithTypography : Story<IExpansionPanelSummaryProps> = Template.bind({});
WithTypography.args = {
  ...Playground.args,
  children: [
    <Typography key={0} {...Subtitle1.args}>Expansion panel summary with subtitle 1&nbsp;</Typography>,
    <Typography key={1} {...Subtitle1WithTextSecondaryColor.args}>
      This a longer text formatted with subtitle1 variant and text secondary color.
    </Typography>,
  ],
};

export const WithTypographyInsideDiv : Story<IExpansionPanelSummaryProps> = Template.bind({});
WithTypographyInsideDiv.args = {
  ...Playground.args,
  children: <div>
    {WithTypography.args.children}
  </div>,
};
