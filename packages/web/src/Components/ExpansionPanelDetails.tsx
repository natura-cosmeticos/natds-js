import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialExpansionPanelDetails, {
  ExpansionPanelDetailsProps as IExpansionPanelDetailsProps,
} from "@material-ui/core/ExpansionPanelDetails";

export {
  ExpansionPanelDetailsProps as IExpansionPanelDetailsProps,
} from "@material-ui/core/ExpansionPanelDetails";

export const ExpansionPanelDetails: FunctionComponent<IExpansionPanelDetailsProps> = forwardRef((
  props: IExpansionPanelDetailsProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialExpansionPanelDetails {...props} ref={ref} />);

ExpansionPanelDetails.displayName = "ExpansionPanelDetails";

export default withTheme(ExpansionPanelDetails);
