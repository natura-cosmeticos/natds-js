import * as React from "react";
import MaterialExpansionPanel from "@material-ui/core/Accordion";
import { IExpansionPanelProps } from "./ExpansionPanel.props";

export { IExpansionPanelProps } from "./ExpansionPanel.props";

/**
 * For more advanced usages, check [Material UI Accordion docs](https://material-ui.com/components/accordion/)
 *
 * ## Importing
 *
 * ```
 * import { ExpansionPanel } from '@naturacosmeticos/natds-web';
 * ```
 *
 * @see https://material-ui.com/components/accordion/
 */
export const ExpansionPanel = React.forwardRef<unknown, IExpansionPanelProps>(
  (props: IExpansionPanelProps, ref) => {
    const { children, ...otherProps } = props;

    return <MaterialExpansionPanel {...otherProps} ref={ref}>{children}</MaterialExpansionPanel>;
  },
);

ExpansionPanel.displayName = "ExpansionPanel";

export default ExpansionPanel;
