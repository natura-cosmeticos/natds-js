import * as React from "react";
import MaterialCircularProgress from "@material-ui/core/CircularProgress";
import { ICircularProgressProps } from "./CircularProgress.props";

/**
 * For more advanced usages, check [Material UI Progress docs](https://material-ui.com/pt/components/progress/)
 *
 * ## Importing
 *
 * ```
 * import { CircularProgress } from '@naturacosmeticos/natds-web';
 * ```
 *
 * @see https://material-ui.com/pt/components/progress/
 */
export const CircularProgress = React.forwardRef<unknown, ICircularProgressProps>(
  (props: ICircularProgressProps, ref: ICircularProgressProps["ref"]) => (
    <MaterialCircularProgress {...props} ref={ref} />
  ),
);

CircularProgress.displayName = "CircularProgress";

export default CircularProgress;
