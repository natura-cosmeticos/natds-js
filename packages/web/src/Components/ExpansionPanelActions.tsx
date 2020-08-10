import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import MaterialExpansionPanelActions, {
  ExpansionPanelActionsProps as IExpansionPanelActionsProps,
} from "@material-ui/core/ExpansionPanelActions";

export {
  ExpansionPanelActionsProps as IExpansionPanelActionsProps,
} from "@material-ui/core/ExpansionPanelActions";

export const ExpansionPanelActions: FunctionComponent<IExpansionPanelActionsProps> = forwardRef((
  props: IExpansionPanelActionsProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any,
) => <MaterialExpansionPanelActions {...props} ref={ref} />);

ExpansionPanelActions.displayName = "ExpansionPanelActions";

export default withTheme(ExpansionPanelActions);
