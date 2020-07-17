import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialExpansionPanelSummary, {
  ExpansionPanelSummaryProps as IExpansionPanelSummaryProps
} from "@material-ui/core/ExpansionPanelSummary";
export {
  ExpansionPanelSummaryProps as IExpansionPanelSummaryProps
} from "@material-ui/core/ExpansionPanelSummary";

export const ExpansionPanelSummary: FunctionComponent<IExpansionPanelSummaryProps> = forwardRef((
  props: IExpansionPanelSummaryProps,
  ref: any
) => <MaterialExpansionPanelSummary {...props} ref={ref} />);

export default withTheme(ExpansionPanelSummary);
