import * as React from "react";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { IExpansionPanelDetailsProps } from "./ExpansionPanelDetails.props";

export { IExpansionPanelDetailsProps } from "./ExpansionPanelDetails.props";

/**
 * ## Importing
 *
 * ```
 * import { ExpansionPanelDetails } from '@naturacosmeticos/natds-web';
 * ```
 */
export const ExpansionPanelDetails = React.forwardRef<unknown, IExpansionPanelDetailsProps>((
  props: IExpansionPanelDetailsProps, ref,
) => <AccordionDetails {...props} ref={ref} />);

ExpansionPanelDetails.displayName = "ExpansionPanelDetails";

export default ExpansionPanelDetails;
