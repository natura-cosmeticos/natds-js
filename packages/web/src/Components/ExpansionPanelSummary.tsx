import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialExpansionPanelSummary, {
  ExpansionPanelSummaryProps as IExpansionPanelSummaryProps,
} from "@material-ui/core/ExpansionPanelSummary";

export {
  ExpansionPanelSummaryProps as IExpansionPanelSummaryProps,
} from "@material-ui/core/ExpansionPanelSummary";

export const ExpansionPanelSummary: FunctionComponent<IExpansionPanelSummaryProps> = forwardRef((
  props: IExpansionPanelSummaryProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialExpansionPanelSummary {...props} ref={ref} />);

ExpansionPanelSummary.displayName = "ExpansionPanelSummary";

export default withTheme(ExpansionPanelSummary);
