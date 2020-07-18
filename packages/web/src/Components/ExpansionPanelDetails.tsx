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
  ref: any,
) => <MaterialExpansionPanelDetails {...props} ref={ref} />);

export default withTheme(ExpansionPanelDetails);
