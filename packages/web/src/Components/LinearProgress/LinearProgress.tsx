import * as React from "react";
import MaterialLinearProgress from "@material-ui/core/LinearProgress";
import { ILinearProgressProps } from "./LinearProgress.props";

export { ILinearProgressProps } from "./LinearProgress.props";

/**
 * ## Importing
 *
 * ```
 * import { LinearProgress } from "@naturacosmeticos/natds-web";
 * ```
 */
export const LinearProgress = React.forwardRef<unknown, ILinearProgressProps>(
  (props: Omit<ILinearProgressProps, "translate">, ref) => (
    <MaterialLinearProgress {...props} ref={ref} />),
);

LinearProgress.displayName = "LinearProgress";

export default LinearProgress;
