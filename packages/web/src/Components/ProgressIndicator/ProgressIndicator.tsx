import * as React from "react";
import MaterialCircularProgress from "@material-ui/core/CircularProgress";
import { IProgressIndicatorProps } from "./ProgressIndicator.props";

/**
 *
 * ## Importing
 * ```
 * import { CircularProgress } from '@naturacosmeticos/natds-web';
 * ```
 *
 */
export const ProgressIndicator = React.forwardRef<unknown, IProgressIndicatorProps>(
  (props: IProgressIndicatorProps, ref) => <MaterialCircularProgress {...props}ref={ref} />);

ProgressIndicator.displayName = "ProgressIndicator";

/**
 * @deprecated `CircularProgress` component will be deprecated soon.
 * Use `ProgressIndicator` instead
 */
export const CircularProgress = ProgressIndicator;

export default { CircularProgress, ProgressIndicator };
