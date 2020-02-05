import React, { FunctionComponent } from 'react';
import { withTheme } from '@material-ui/styles';
import MaterialExpansionPanelSummary, {
  ExpansionPanelSummaryProps as IExpansionPanelSummaryProps
} from '@material-ui/core/ExpansionPanelSummary';
export {
  ExpansionPanelSummaryProps as IExpansionPanelSummaryProps
} from '@material-ui/core/ExpansionPanelSummary';

export const ExpansionPanelSummary: FunctionComponent<IExpansionPanelSummaryProps> =
(props: IExpansionPanelSummaryProps) => (
  <MaterialExpansionPanelSummary {...props} />
);

export default withTheme(ExpansionPanelSummary);
