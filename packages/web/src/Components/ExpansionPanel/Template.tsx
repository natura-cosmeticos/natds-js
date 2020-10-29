import { Story } from "@storybook/react";
import * as React from "react";
import { IExpansionPanelProps } from "./ExpansionPanel.props";
import { ExpansionPanel } from "./ExpansionPanel";
import { ExpansionPanelSummary } from "../ExpansionPanelSummary";
import {
  Playground as SummaryPlayground,
  WithTypography, WithTypographyInsideDiv,
} from "../ExpansionPanelSummary/ExpansionPanelSummary.stories";
import { ExpansionPanelDetails } from "../ExpansionPanelDetails";
import {
  Playground as DetailsPlayground,
  WithSubtitle1, WithSubtitle1AndTextPrimaryColor,
  WithSubtitle1AndTextSecondaryColor,
} from "../ExpansionPanelDetails/ExpansionPanelDetails.stories";
import { ExpansionPanelActions } from "../ExpansionPanelActions";
import { Playground as ActionsPlayground } from "../ExpansionPanelActions/ExpansionPanelActions.stories";
import { Divider } from "../Divider";
import { Playground as DividerPlayground } from "../Divider/Divider.stories";

export const Template : Story<IExpansionPanelProps> = (args: IExpansionPanelProps) => (
  <div>
    <ExpansionPanel {...args}>
      <ExpansionPanelSummary {...SummaryPlayground.args} />
      <ExpansionPanelDetails {...WithSubtitle1.args} />
    </ExpansionPanel>
    <ExpansionPanel {...args}>
      <ExpansionPanelSummary {...SummaryPlayground.args} />
      <ExpansionPanelDetails {...DetailsPlayground.args} />
      <ExpansionPanelActions {...ActionsPlayground.args} />
    </ExpansionPanel>
    <ExpansionPanel {...args}>
      <ExpansionPanelSummary {...WithTypography.args} />
      <ExpansionPanelDetails {...WithSubtitle1AndTextSecondaryColor.args} />
    </ExpansionPanel>
    <ExpansionPanel {...args}>
      <ExpansionPanelSummary {...WithTypography.args} />
      <ExpansionPanelDetails {...WithSubtitle1AndTextPrimaryColor.args} />
    </ExpansionPanel>
    <ExpansionPanel {...args}>
      <ExpansionPanelSummary {...WithTypography.args} />
      <ExpansionPanelDetails {...WithSubtitle1AndTextPrimaryColor.args} />
      <ExpansionPanelActions {...ActionsPlayground.args} />
    </ExpansionPanel>
    <ExpansionPanel {...args}>
      <ExpansionPanelSummary {...WithTypographyInsideDiv.args} />
      <ExpansionPanelDetails {...WithSubtitle1AndTextPrimaryColor.args} />
      <Divider {...DividerPlayground.args} />
    </ExpansionPanel>
  </div>
);

export default Template;
