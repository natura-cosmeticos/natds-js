import * as React from "react";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { IExpansionPanelSummaryProps } from "./ExpansionPanelSummary.props";

export { IExpansionPanelSummaryProps } from "./ExpansionPanelSummary.props";

/**
 * ## Importing
 *
 * ```
 * import { ExpansionPanelSummary } from '@naturacosmeticos/natds-web';
 * ```
 */
export const ExpansionPanelSummary = React.forwardRef<HTMLDivElement, IExpansionPanelSummaryProps>((
  props: IExpansionPanelSummaryProps, ref,
) => <AccordionSummary {...props} ref={ref} />);

ExpansionPanelSummary.displayName = "ExpansionPanelSummary";

export default ExpansionPanelSummary;
