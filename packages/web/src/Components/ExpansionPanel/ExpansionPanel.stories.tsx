import { Meta, Story } from "@storybook/react";
import { ExpansionPanel } from "./ExpansionPanel";
import { IExpansionPanelProps } from "./ExpansionPanel.props";
import { ExpansionPanelSummary } from "../ExpansionPanelSummary";
import { ExpansionPanelActions } from "../ExpansionPanelActions";
import { ExpansionPanelDetails } from "../ExpansionPanelDetails";
import { Collapse } from "../Collapse";
import { Template } from "./Template";

export default {
  component: ExpansionPanel,
  subcomponents: {
    Collapse, ExpansionPanelActions, ExpansionPanelDetails, ExpansionPanelSummary,
  },
  title: "Components/Expansion Panel",
} as Meta;

export const Playground : Story<IExpansionPanelProps> = Template.bind({});

export const ZeroElevation : Story<IExpansionPanelProps> = Template.bind({});
ZeroElevation.args = {
  elevation: 0,
};
