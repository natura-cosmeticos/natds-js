import * as React from "react";
import AccordionActions from "@material-ui/core/AccordionActions";
import { IExpansionPanelActionsProps } from "./ExpansionPanelActions.props";

export { IExpansionPanelActionsProps } from "./ExpansionPanelActions.props";

/**
 * ## Importing
 *
 * ```
 * import { ExpansionPanelActions } from '@naturacosmeticos/natds-web';
 * ```
 */
export const ExpansionPanelActions = React.forwardRef<unknown, IExpansionPanelActionsProps>((
  props: IExpansionPanelActionsProps, ref,
) => <AccordionActions {...props} ref={ref} />);

ExpansionPanelActions.displayName = "ExpansionPanelActions";

export default ExpansionPanelActions;
